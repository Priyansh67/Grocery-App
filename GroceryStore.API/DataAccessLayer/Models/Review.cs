using System;
using System.Collections.Generic;

namespace DataAccessLayer.Models
{
    public partial class Review
    {
        public int Id { get; set; }
        public string Reviewdata { get; set; } = null!;
        public DateTime Date { get; set; }
        public string Name { get; set; } = null!;
        public int ProductId { get; set; }
    }
}
