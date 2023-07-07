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
    public class CartBLL : ICartBLL
    {

        private readonly ICartDAL cartDAL;
        public CartBLL(ICartDAL obj) 
        { 
          cartDAL = obj;
        }
        public Task<List<Cart>> AddToCart(Cart cart)
        {
            return cartDAL.AddToCart(cart);
        }

        public Task<Cart> DeleteCartItem(int id)
        {
           return cartDAL.DeleteCartItem(id);
        }

        public Task<List<Cart>> DeleteCustomerCart(int id)
        {
            return cartDAL.DeleteCustomerCart(id);
        }

        public Task<List<Cart>> GetCart(string id)
        {
            return cartDAL.GetCart(id);
        }
    }
}
