using System;
using System.Collections.Generic;

namespace DataAccessLayer.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; } = null!;
        public string ProductDescription { get; set; } = null!;
        public string ProductCategory { get; set; } = null!;
        public int ProductQuantity { get; set; }
        public float? ProductDiscount { get; set; }
        public float ProductPrice { get; set; }
        public string ProductSpecification { get; set; } = null!;
        public string ProductImage { get; set; } = null!;
    }
}
