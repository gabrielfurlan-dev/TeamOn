using Microsoft.AspNetCore.Mvc;
using TeamOn.Domain.Store.Comands.Handlers;
using TeamOn.Domain.Store.Entities;

namespace TeamOn.Api.Controllers
{
    [ApiController]
    [Route("/store")]
    public class StoreController : ControllerBase
    {
        [Route("get")]
        [HttpGet]
        public List<StoreEntity> GetItems(
        [FromServices] GetStoreItemsHandler handler)
        => handler.GetItems();
    }
}
