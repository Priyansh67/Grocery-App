using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Interfaces
{
    public interface ICartBLL
    {
        public Task<List<Cart>> AddToCart(Cart cart);

        public Task<List<Cart>> GetCart(string id);

        public Task<Cart> DeleteCartItem(int id);

        public Task<List<Cart>> DeleteCustomerCart(int id);
    }
}
