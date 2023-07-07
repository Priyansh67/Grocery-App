using BusinessLogicLayer.Classes;
using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerBLL customerBLL;

        public CustomerController(ICustomerBLL obj)
        {
            this.customerBLL = obj;
            
        }

        [HttpPost]
        public async Task<ActionResult<List<Customer>>> PostCustomer(Customer customer)
        {
            return await customerBLL.PostCustomer(customer);
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<Customer>> GetCustomer(User customer)
        {
            return await customerBLL.GetCustomer(customer);
        }

    }
}
