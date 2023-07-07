using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderBLL orderBLL;

        public OrderController(IOrderBLL obj)
        {
            orderBLL = obj;
        }

        [HttpGet]
        [Route("order/{id}")]

        public async Task<ActionResult<List<Order>>> GetOrders(string id)
        {
            return await orderBLL.GetCustomerOrders(id);
        }

        [HttpPost]
        [Route("order")]

        public async Task<ActionResult<List<Order>>> PostProduct(Order order)
        {
            return await orderBLL.PostOrders(order);
        }

        [HttpGet]
        [Route("order/{id}/{quantity}")]

        public async Task<Product> ModifyProductQuantity(string id, string quantity)
        {
          
            int ID = Convert.ToInt32(id);
            int qun = Convert.ToInt32(quantity);
            return await orderBLL.ModifyProductQuantity(ID, qun);
        }
    }
}
