using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Classes;
using DataAccessLayer.Interfaces;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Classes
{
    public class AdminBLL : IAdminBLL
    {
        public readonly IAdminDAL adminDAL; 
        public AdminBLL(IAdminDAL obj) 
        {
            adminDAL = obj;
        }

        public async Task<List<Admin>> PostAdmin(Admin admin)
        {
            return await adminDAL.PostAdmin(admin);
        }

        public async Task<Admin> GetAdmin(User user)
        {
            return await adminDAL.GetAdmin(user);
        }
    }
}
