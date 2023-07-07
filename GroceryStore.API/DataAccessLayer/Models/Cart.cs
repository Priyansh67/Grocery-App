using System;
using System.Collections.Generic;

namespace DataAccessLayer.Models
{
    public partial class Cart
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Product { get; set; } = null!;
        public int ProductQuantity { get; set; }
        public int CustomerId { get; set; }
    }
}
