using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Web.Models;
using StudyNetCore.Repository.Models;

namespace StudyNetCore.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]/{id?}")]
    public class OrderController : Controller
    {
        IOrderRepository _repo;
        public OrderController(IOrderRepository order)
        {
            _repo = order;
        }
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetOrder().Result.Translate<Order, OrderViewModel>());
            }
            catch(Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repo.GetOrderDetail(id).Result.Translate<OrderDetail, OrderDetailViewModel>());
            }
            catch(Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        //public IActionResult Post(OrderViewModel data)
        //{

        //}
    }
}