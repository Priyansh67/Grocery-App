using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartBLL cartBLL;

        public CartController(ICartBLL obj)
        {
            cartBLL = obj;
        }

        [HttpGet]
        [Route("cart/{id}")]
        public async Task<ActionResult<List<Cart>>> GetCart(string id)
        {
            return await cartBLL.GetCart(id);
        }


        [HttpPost]
        [Route("cart")]
        public async Task<ActionResult<List<Cart>>> AddToCart(Cart cart)
        {
            return await cartBLL.AddToCart(cart);
        }

        [HttpDelete]
        [Route("cart/customer")]
        public async Task<ActionResult<List<Cart>>> DeleteCustomerCart(int id)
        {
            return await cartBLL.DeleteCustomerCart(id);
        }

        [HttpDelete]
        [Route("cart")]
        public async Task<ActionResult<Cart>> DeleteCartItem(int id)
        {
            return await cartBLL.DeleteCartItem(id);
        }
    }
}
