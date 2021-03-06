﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudyNetCore.Repository.Interfaces;
using StudyNetCore.Web.Models;
using StudyNetCore.Repository.Models;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Concurrent;

namespace StudyNetCore.Web.Controllers
{

    [Route("api/[controller]/[action]/{id?}")]
    public class OrderController : Controller
    {
        const int PROCESSING = 1;
        IOrderRepository _repo;
        public OrderController(IOrderRepository order)
        {
            _repo = order;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var result = _repo.GetOrder().Result;
                return Ok(result.Translate<Order, OrderViewModel>());
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repo.GetOrderDetail(id).Result.Translate<OrderDetail, OrderDetailViewModel>());
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        public IActionResult Post([FromBody] OrderViewModel data)
        {
            try
            {
                data.StatusId = PROCESSING;
                var orderId = _repo.CreateOrder(data.Translate<OrderViewModel, Order>());
                foreach (var detail in data.Details)
                {
                    detail.OrderId = orderId.Result;
                    _repo.CreateOrderDetail(detail.Translate<OrderDetailViewModel, OrderDetail>());
                }
                return Ok(true);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }

        [HttpPatch]
        [Authorize]
        public IActionResult Patch([FromBody] OrderViewModel data)
        {
            try
            {
                var result = _repo.UpdateOrder(data.Translate<OrderViewModel, Order>());
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace);
            }
        }
    }
}