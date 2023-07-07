using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interfaces
{
    public interface ICustomerDAL
    {
        public Task<List<Customer>> PostCustomer(Customer customer);

        public Task<Customer> GetCustomer(User user);
    }
}
