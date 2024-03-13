using System;
using System.Linq;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using menyala.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

public class ApiController : Controller
{
    public class ApiResponse
    {
        public IEnumerable<Api> Data { get; set; }
    }

    public async Task<IActionResult> Index()
    {
        return View();
    }

    public async Task<IActionResult> Tabel()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> GetList()
    {
        try
        {
            var draw = int.Parse(Request.Form["draw"].FirstOrDefault());
            var start = int.Parse(Request.Form["start"].FirstOrDefault());
            var length = int.Parse(Request.Form["length"].FirstOrDefault());
            var sortColumn = Request.Form["columns[" + Request.Form["order[0][column]"].FirstOrDefault() + "][name]"].FirstOrDefault();
            var sortColumnDirection = Request.Form["order[0][dir]"].FirstOrDefault();
            var searchValue = Request.Form["search[value]"].FirstOrDefault();

            // Call your API and get data
            var apiResponse = await GetDataFromApi();

            if (apiResponse == null || !apiResponse.Any())
            {
                // Handle the case where the API response is empty or null
                return Json(new DataTableResult<Api>
                {
                    draw = draw,
                    recordsTotal = 0,
                    recordsFiltered = 0,
                    data = new List<Api>()
                });
            }

            // Filtering
            var filteredData = apiResponse.Where(a => 
                (string.IsNullOrEmpty(searchValue) || 
                    a.balaiName.Contains(searchValue) ||
                    a.name.Contains(searchValue) ||
                    a.subDomain.Contains(searchValue) ||
                    a.jumlahPos.ToString().Contains(searchValue) ||
                    a.jumlahPosOnline.ToString().Contains(searchValue) ||
                    a.jumlahPosOffline.ToString().Contains(searchValue) ||
                    a.slug.Contains(searchValue) ||
                    a.deviceId.Contains(searchValue) ||
                    (a.deviceStatus != null && a.deviceStatus.Contains(searchValue)) ||
                    a.lastReadingAt?.ToString().Contains(searchValue) == true)
                )
                .ToList();

            // Sorting
            if (!string.IsNullOrEmpty(sortColumn) && !string.IsNullOrEmpty(sortColumnDirection))
            {
                filteredData = SortData(filteredData, sortColumn, sortColumnDirection);
            }

            // Grouping and calculating aggregated values
            var groupedData = filteredData
                .GroupBy(a => a.balaiName)
                .Select(g => new Api
                {
                    balaiName = g.Key,
                    jumlahPos = g.Count(),
                    jumlahPosOnline = g.Count(p => p.deviceStatus == "online"),
                    jumlahPosOffline = g.Count(p => p.deviceStatus == "offline"),

                    slug = g.Any(p => p.deviceStatus == "offline") ? g.Where(p => p.deviceStatus == "offline").Select(p => p.slug).FirstOrDefault() : null,
                    subDomain = g.Any(p => p.deviceStatus == "offline") ? g.Where(p => p.deviceStatus == "offline").Select(p => p.subDomain).FirstOrDefault() : null,
                    name = g.Any(p => p.deviceStatus == "offline") ? g.Where(p => p.deviceStatus == "offline").Select(p => p.name).FirstOrDefault() : null,
                    deviceId = g.Any(p => p.deviceStatus == "offline") ? g.Where(p => p.deviceStatus == "offline").Select(p => p.deviceId).FirstOrDefault() : null,
                    deviceStatus = g.Any(p => p.deviceStatus == "offline") ? "offline" : "online",
                    lastReadingAt = g.Any(p => p.deviceStatus == "offline") ? g.Where(p => p.deviceStatus == "offline").Max(p => p.lastReadingAt) : default(DateTime?)
                })
                .ToList();

            // Paging
            var result = new DataTableResult<Api>
            {
                draw = draw,
                recordsTotal = apiResponse.Count(),
                recordsFiltered = groupedData.Count(),
                data = groupedData.Skip(start).Take(length).ToList()
            };

            var nomorColumn = start + 1;
            result.data.ForEach(item =>
            {
                item.nomor = nomorColumn;
                nomorColumn++;
            });

            return Json(result);
        }
        catch (Exception ex)
        {
            // Handle other exceptions
            return Json(new DataTableResult<Api>
            {
                draw = 0,
                recordsTotal = 0,
                recordsFiltered = 0,
                data = new List<Api>()
            });
        }
    }

    [HttpPost]
    public async Task<IActionResult> GetTotalPos()
    {
        try
        {
            // Panggil metode untuk mendapatkan data dari API
            var apiResponse = await GetDataFromApi();

            if (apiResponse == null)
            {
                // Jika respons API null, kembalikan total pos 0
                return Json(new { TotalPos = 0 });
            }

            // Hitung total pos menggunakan metode Count()
            int totalPos = apiResponse.Count();

            return Json(new { TotalPos = totalPos });
        }
        catch (Exception ex)
        {
            // Handle exception
            Console.WriteLine(ex.Message);
            return Json(new { TotalPos = 0 });
        }
    }

    [HttpPost]
    public async Task<IActionResult> GetTotalDugaAir()
    {
        try
        {
            // Panggil metode untuk mendapatkan data dari API
            var apiResponse = await GetDataFromApi();

            if (apiResponse == null)
            {
                // Jika respons API null, kembalikan total pos 0
                return Json(new { TotalDugaAir = 0 });
            }

            // Hitung total pos menggunakan metode Count()
            int totalDugaAir = apiResponse.Count(a => a.stationType == "AWLR" || a.stationType == "AWLR_ARR");

            return Json(new { TotalDugaAir = totalDugaAir });
        }
        catch (Exception ex)
        {
            // Handle exception
            Console.WriteLine(ex.Message);
            return Json(new { TotalDugaAir = 0 });
        }
    }
    [HttpPost]
    public async Task<IActionResult> GetTotalCurahHujan()
    {
        try
        {
            // Panggil metode untuk mendapatkan data dari API
            var apiResponse = await GetDataFromApi();

            if (apiResponse == null)
            {
                // Jika respons API null, kembalikan total pos 0
                return Json(new { TotalCurahHujan = 0 });
            }

            // Hitung total pos menggunakan metode Count()
            int totalCurahHujan = apiResponse.Count(a => a.stationType == "ARR" || a.stationType == "AWLR_ARR");

            return Json(new { TotalCurahHujan = totalCurahHujan });
        }
        catch (Exception ex)
        {
            // Handle exception
            Console.WriteLine(ex.Message);
            return Json(new { TotalCurahHujan = 0 });
        }
    }

    [HttpPost]
    public async Task<IActionResult> GetTotalKlimatologi()
    {
        try
        {
            // Panggil metode untuk mendapatkan data dari API
            var apiResponse = await GetDataFromApi();

            if (apiResponse == null)
            {
                // Jika respons API null, kembalikan total pos 0
                return Json(new { TotalKlimatologi = 0 });
            }

            // Hitung total pos menggunakan metode Count()
            int totalKlimatologi = apiResponse.Count(a => a.stationType == "AWS");

            return Json(new { TotalKlimatologi = totalKlimatologi });
        }
        catch (Exception ex)
        {
            // Handle exception
            Console.WriteLine(ex.Message);
            return Json(new { TotalKlimatologi = 0 });
        }
    }


    [HttpGet]
    public ActionResult GetLastUpdateTime()
    {
        // Get the last update time from your data source
        var lastUpdateTime = DateTime.Now; // Replace with logic as needed

        // Return the last update time in an appropriate format
        return Json(new { lastUpdateTime = lastUpdateTime.ToString("yyyy-MM-ddTHH:mm:ss") });
    }

    private async Task<List<Api>> GetDataFromApi()
    {
        string apiUrl = "http://localhost:5000/Station/All";
        string username = "m0n1tor_st4tion";
        string password = "H1gertech.1dua3";

        using (HttpClient client = new HttpClient())
        {
            var credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{username}:{password}"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", credentials);
            HttpResponseMessage response = await client.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                string responseData = await response.Content.ReadAsStringAsync();
                var apiResponse = JsonConvert.DeserializeObject<ApiResponse>(responseData);
                return apiResponse?.Data?.ToList() ?? new List<Api>();
            }
            else
            {
                // Handle errors appropriately
                return new List<Api>();
            }
        }
    }

    private List<Api> SortData(List<Api> data, string sortColumn, string sortColumnDirection)
    {
        switch (sortColumn)
        {
            case "balaiName":
                return sortColumnDirection == "asc" ?
                    data.OrderBy(a => a.balaiName).ToList() :
                    data.OrderByDescending(a => a.balaiName).ToList();

            case "jumlahPos":
                return sortColumnDirection == "asc" ?
                    data.OrderBy(a => a.jumlahPos).ToList() :
                    data.OrderByDescending(a => a.jumlahPos).ToList();

            case "jumlahPosOnline":
                return sortColumnDirection == "asc" ?
                    data.OrderBy(a => a.jumlahPosOnline).ToList() :
                    data.OrderByDescending(a => a.jumlahPosOnline).ToList();

            case "jumlahPosOffline":
                return sortColumnDirection == "asc" ?
                    data.OrderBy(a => a.jumlahPosOffline).ToList() :
                    data.OrderByDescending(a => a.jumlahPosOffline).ToList();

            default:
                return data;
        }
    }
}
