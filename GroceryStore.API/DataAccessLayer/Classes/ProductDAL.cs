using DataAccessLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Classes
{
    public class ProductDAL : IProductDAL
    {
        private readonly GroceryStoreDBContext _dbContext;

        public ProductDAL(GroceryStoreDBContext context)
        {
            _dbContext = context;
        }
        public async Task<List<Product>> DeleteProduct(int id)
        {
            var data = await _dbContext.Products.FindAsync(id);
            if (data == null)
            {
                return null;
            }

            else
            {
                _dbContext.Products.Remove(data);
                await _dbContext.SaveChangesAsync();
                return await _dbContext.Products.ToListAsync();
            }


           
        }

        public async Task<List<Category>> GetCategoryList()
        {
            return await _dbContext.Categories.ToListAsync();
        }

        public async Task<Product> GetProductById(string id)
        {
            int ID = Convert.ToInt32(id);
            return await _dbContext.Products.FindAsync(ID);

        }

        public async Task<List<Review>> GetProductReviews(string id)
        {
            int ID = Convert.ToInt32(id);

            return await _dbContext.Reviews.Where(e => e.ProductId == ID).ToListAsync();
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _dbContext.Products.ToListAsync();
        }

        public async Task<List<Product>> PostProduct(Product product)
        {
            var category = _dbContext.Categories.Where(e => e.CategoryName == product.ProductCategory).SingleOrDefault();
            if (category == null)
            {
                Category d = new Category();
                d.CategoryName = product.ProductCategory;
                _dbContext.Categories.Add(d);
                await _dbContext.SaveChangesAsync();

            }

            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();

            return await _dbContext.Products.ToListAsync();
        }

        public async Task<List<Review>> PostReviews(Review review)
        {
            _dbContext.Reviews.Add(review);
            await _dbContext.SaveChangesAsync();

            return await _dbContext.Reviews.ToListAsync();
        }

        public async Task<List<Product>> UpdateProducts(string id, Product product)
        {
            int ID = Convert.ToInt32(id);
            var data = await _dbContext.Products.FindAsync(ID);
            if (data == null)
            {
                return null;
            }

            data.ProductName = product.ProductName;
            data.ProductDescription = product.ProductDescription;
            data.ProductPrice = product.ProductPrice;
            data.ProductDiscount = product.ProductDiscount;
            data.ProductImage = product.ProductImage;
            data.ProductQuantity = product.ProductQuantity;
            data.ProductSpecification = product.ProductSpecification;
            data.ProductCategory = product.ProductCategory;

            await _dbContext.SaveChangesAsync();

            return await _dbContext.Products.ToListAsync();
        }
    }
}
