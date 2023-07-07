using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Interfaces;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Classes
{
    public class CustomerBLL : ICustomerBLL
    {

        private readonly ICustomerDAL CustomerDAL;

        public CustomerBLL(ICustomerDAL obj)
        {
            CustomerDAL = obj;
        }
        public Task<Customer> GetCustomer(User user)
        {
            return CustomerDAL.GetCustomer(user);
        }

        public Task<List<Customer>> PostCustomer(Customer customer)
        {
           return CustomerDAL.PostCustomer(customer);
        }
    }
}
