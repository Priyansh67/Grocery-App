using System;
using System.Collections.Generic;

namespace DataAccessLayer.Models
{
    public partial class Order
    {
        public int Id { get; set; }
        public string Products { get; set; } = null!;
        public DateTime Date { get; set; }
        public int CustomerId { get; set; }
        public float Amount { get; set; }
    }
}
