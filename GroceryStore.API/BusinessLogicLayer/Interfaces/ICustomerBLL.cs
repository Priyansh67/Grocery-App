using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Interfaces
{
    public interface ICustomerBLL
    {

        public Task<List<Customer>> PostCustomer(Customer customer);
        public Task<Customer> GetCustomer(User user);
    }
}
