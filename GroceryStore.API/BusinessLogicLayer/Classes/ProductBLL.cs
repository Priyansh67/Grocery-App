using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Interfaces;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Classes
{
    public class ProductBLL : IProductBLL
    {
        private readonly IProductDAL productDAL;

        public ProductBLL(IProductDAL obj)
        {
            productDAL = obj;
        }

        public Task<List<Product>> DeleteProduct(int id)
        {
            return productDAL.DeleteProduct(id);
        }

        public Task<List<Category>> GetCategoryList()
        {
            return productDAL.GetCategoryList();
        }

        public Task<Product> GetProductById(string id)
        {
           return productDAL.GetProductById(id);
        }

        public Task<List<Review>> GetProductReviews(string id)
        {
            return productDAL.GetProductReviews(id); 
        }

        public Task<List<Product>> GetProducts()
        {
            return productDAL.GetProducts();
        }

        public Task<List<Product>> PostProduct(Product product)
        {
            return productDAL.PostProduct(product);
        }

        public Task<List<Review>> PostReviews(Review review)
        {
            return productDAL.PostReviews(review);
        }

        public Task<List<Product>> UpdateProducts(string id, Product product)
        {
            return productDAL.UpdateProducts(id, product);
        }
    }
}
