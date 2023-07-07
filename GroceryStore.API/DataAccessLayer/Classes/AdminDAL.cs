using DataAccessLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Classes
{
    public class AdminDAL : IAdminDAL
    {

        private readonly GroceryStoreDBContext _dbContext;
        public AdminDAL(GroceryStoreDBContext context)
        {
            _dbContext = context;
                
        }

        public async Task<List<Admin>> PostAdmin(Admin admin)
        {
            if (_dbContext.Admins.Where(e => e.Email == admin.Email).SingleOrDefault() == null)
            {
                _dbContext.Admins.Add(admin);
                await _dbContext.SaveChangesAsync();
                return await _dbContext.Admins.ToListAsync();
            }
            else
            {
                return null;
            }

          
        }

        public async Task<Admin> GetAdmin(User user)
        {
            var data = _dbContext.Admins.Where(e => e.Email == user.Email).SingleOrDefault();

            if (data == null || data.Password != user.Password)
            {
                return null;

            }
            else
            {
                return _dbContext.Admins.Where(e => e.Email == user.Email).SingleOrDefault();
            }

            
        }

    }
}
