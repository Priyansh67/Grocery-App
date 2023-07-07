using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GroceryStore.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductBLL productBLL;

        public ProductController(IProductBLL obj)
        {
            productBLL = obj;
        }

        [HttpGet]
        [Route("product/{id}")]
        public async Task<ActionResult<Product>> GetProductById(string id)
        {
          var data =  await productBLL.GetProductById(id);

            return Ok(data);
        }

        [HttpGet]
        [Route("GetProduct")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return Ok(await productBLL.GetProducts());
        }


        [HttpGet]
        [Route("Category")]

        public async Task<ActionResult<List<Category>>> GetCategory()
        {
            return Ok(await productBLL.GetCategoryList());
        }


        [HttpPost]

        public async Task<ActionResult<List<Product>>> PostProduct(Product product)
        {
            return Ok(await productBLL.PostProduct(product));
        }

        [HttpPut]
        [Route("product/{id}")]
        public async Task<ActionResult<List<Product>>> UpdateProducts(string id, Product product)
        {
            return Ok(await productBLL.UpdateProducts(id, product));
        }


        [HttpDelete]

        public async Task<ActionResult<List<Product>>> DeleteProduct(int id)
        {
            return Ok(await productBLL.DeleteProduct(id));
        }


        [HttpGet]
        [Route("review/{id}")]

        public async Task<ActionResult<List<Review>>> GetReviews(string id)
        {
            return await productBLL.GetProductReviews(id);
        }

        [HttpPost]
        [Route("review")]

        public async Task<ActionResult<List<Review>>> PostReviews(Review review)
        {
            return Ok(await productBLL.PostReviews(review));
        }





    }


}
