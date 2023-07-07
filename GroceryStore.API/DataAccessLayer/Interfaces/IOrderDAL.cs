using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interfaces
{
    public interface IOrderDAL
    {
        public Task<List<Order>> GetCustomerOrders(string id);

        public Task<List<Order>> PostOrders(Order order);

        public Task<Product> ModifyProductQuantity(int id, int quantity);
    }
}
