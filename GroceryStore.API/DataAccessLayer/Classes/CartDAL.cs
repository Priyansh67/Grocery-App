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
    public class CartDAL : ICartDAL
    {
        private readonly GroceryStoreDBContext _dbContext;

        public CartDAL(GroceryStoreDBContext context)
        {
            _dbContext = context;
        }
        public async Task<List<Cart>> AddToCart(Cart cart)
        {
            _dbContext.Carts.Add(cart);
            await _dbContext.SaveChangesAsync();

            return await _dbContext.Carts.ToListAsync();
        }

        public async Task<Cart> DeleteCartItem(int id)
        {
            var data = await _dbContext.Carts.FindAsync(id);
            if (data == null)
            {
                return null;
            }


            _dbContext.Carts.Remove(data);
            await _dbContext.SaveChangesAsync();
            return data;
        }

        public async Task<List<Cart>> DeleteCustomerCart(int id)
        {
            var data = await _dbContext.Carts.Where(e => e.CustomerId == id).ToListAsync();
            if (data == null)
            {
                return null;
            }

            for (int i = 0; i < data.Count; i++)
            {
                _dbContext.Carts.Remove(data[i]);
                await _dbContext.SaveChangesAsync();
            }

            return data;
        }

        public async Task<List<Cart>> GetCart(string id)
        {
            int ID = Convert.ToInt32(id);
            return await _dbContext.Carts.Where(e => e.CustomerId == ID).OrderBy(e => e.Date).ToListAsync();
        }
    }
}
