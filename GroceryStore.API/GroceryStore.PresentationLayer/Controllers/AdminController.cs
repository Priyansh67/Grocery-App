using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public readonly IAdminBLL adminBLL;

        public AdminController(IAdminBLL obj)
        {
            adminBLL = obj;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<Admin>> GetAdmin(User admin)
        {

            var data = await adminBLL.GetAdmin(admin);

            if(data == null)
            {
                return null;
            }
            else
            {
                return Ok(data);
            }
           
        }

        [HttpPost]
        public async Task<ActionResult<List<Admin>>> PostAdmin(Admin admin)
        {
            var data = await adminBLL.PostAdmin(admin);
            if (data == null)
            {
                return null;
            }
            else
            {
                return Ok(data);
            }
        }

    }
}
