using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interfaces
{
    public interface IAdminDAL
    {
        public  Task<List<Admin>> PostAdmin(Admin admin);
        public  Task<Admin> GetAdmin(User user);

    }
}
