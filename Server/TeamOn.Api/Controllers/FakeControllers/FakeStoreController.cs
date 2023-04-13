using Microsoft.AspNetCore.Mvc;
using TeamOn.Domain.Store.Comands;
using TeamOn.Domain.Store.Entities;

namespace TeamOn.Api.Controllers.FakeControllers
{
    [ApiController]
    [Route("/fake")]
    public class FakeStoreController : ControllerBase
    {
        [Route("store")]
        [HttpPost]
        public IEnumerable<StoreItem> GetItens(
            [FromServices] GetItensHandler handler
            ) => handler.GetItems();
    }
}
