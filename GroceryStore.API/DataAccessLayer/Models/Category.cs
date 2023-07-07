using System;
using System.Collections.Generic;

namespace DataAccessLayer.Models
{
    public partial class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; } = null!;
    }
}
