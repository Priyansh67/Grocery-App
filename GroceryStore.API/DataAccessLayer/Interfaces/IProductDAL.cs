using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interfaces
{
    public interface IProductDAL
    {
        public Task<Product> GetProductById(string id);

        public Task<List<Product>> GetProducts();

        public Task<List<Product>> PostProduct(Product product);

        public Task<List<Product>> UpdateProducts(string id, Product product);

        public  Task<List<Product>> DeleteProduct(int id);

        public Task<List<Review>> GetProductReviews(string id);

        public Task<List<Review>> PostReviews(Review review);

        public Task<List<Category>> GetCategoryList();

    }
}
