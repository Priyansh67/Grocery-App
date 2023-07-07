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
    public class OrderBLL : IOrderBLL
    {
        private readonly IOrderDAL orderDAL;

        public OrderBLL(IOrderDAL obj)
        {
            orderDAL = obj; 
        }
        public Task<List<Order>> GetCustomerOrders(string id)
        {
            return orderDAL.GetCustomerOrders(id);
        }

        public Task<List<Order>> PostOrders(Order order)
        {
            return orderDAL.PostOrders(order);
        }

        public async Task<Product> ModifyProductQuantity(int id, int quantity)
        {
            return await orderDAL.ModifyProductQuantity(id, quantity);
        }
    }
}
