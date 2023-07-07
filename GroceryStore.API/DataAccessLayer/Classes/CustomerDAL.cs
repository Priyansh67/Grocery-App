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
    public class CustomerDAL : ICustomerDAL
    {
        private readonly GroceryStoreDBContext _dbContext;

        public CustomerDAL(GroceryStoreDBContext context)
        {
            _dbContext = context;
        }
        public async Task<Customer> GetCustomer(User user)
        {
            var data = _dbContext.Customers.Where(e => e.Email == user.Email).SingleOrDefault();

            if (data == null || data.Password != user.Password)
            {
                return null;

            }
            else
            {
                return  _dbContext.Customers.Where(e => e.Email == user.Email).SingleOrDefault();
            }
        }

        public async Task<List<Customer>> PostCustomer(Customer customer)
        {
            if (_dbContext.Customers.Where(e => e.Email == customer.Email).SingleOrDefault() == null)
            {
                _dbContext.Customers.Add(customer);
                await _dbContext.SaveChangesAsync();
                return await _dbContext.Customers.ToListAsync();
            }
            else
            {
                return null;
            }
        }
    }
}
