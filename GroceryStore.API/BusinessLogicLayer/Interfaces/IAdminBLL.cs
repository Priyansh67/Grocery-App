using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Interfaces
{
    public interface IAdminBLL
    {
        public Task<List<Admin>> PostAdmin(Admin admin);
        public Task<Admin> GetAdmin(User user);
    }
}
