using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class Api
{
    public string? deviceId { get; set; }
    public string? slug { get; set; }
    public string? organizationCode { get; set; }
    public string subDomain { get; set;}
    public string stationType { get; set;}

    [Required]
    public string balaiName { get; set; }
    public string name { get; set;}
    public DateTime? lastReadingAt { get; set; }
    public string? deviceStatus { get; set; }

    // Adjust the properties below based on the sorting logic used
    public int nomor { get; set; }
    public int jumlahPos { get; set; }
    public int jumlahPosOnline { get; set; }
    public int jumlahPosOffline { get; set; }
}

public class DataTableResult<T>
{
    public int draw { get; set; }
    public int recordsTotal { get; set; }
    public int recordsFiltered { get; set; }
    public List<T> data { get; set; }
}
