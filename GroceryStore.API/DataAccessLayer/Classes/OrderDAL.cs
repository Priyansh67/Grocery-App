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
    public class OrderDAL : IOrderDAL
    {
        private readonly GroceryStoreDBContext _dbContext;
        public OrderDAL(GroceryStoreDBContext context) 
        { 
            _dbContext = context;
        }
        public async Task<List<Order>> GetCustomerOrders(string id)
        {
            int ID = Convert.ToInt32(id);
            return await _dbContext.Orders.Where(e => e.CustomerId == ID).OrderByDescending(e => e.Date).ToListAsync();
        }

        public async Task<List<Order>> PostOrders(Order order)
        {
           
            _dbContext.Orders.Add(order);
            await _dbContext.SaveChangesAsync();

            return await _dbContext.Orders.ToListAsync();
        }

        public async Task<Product> ModifyProductQuantity(int id, int Quantity)
        {
           var product = await _dbContext.Products.FindAsync(id);

            product.ProductQuantity = product.ProductQuantity - Quantity;
            await _dbContext.SaveChangesAsync();

            return await _dbContext.Products.FindAsync(id);
        }
    }
}
