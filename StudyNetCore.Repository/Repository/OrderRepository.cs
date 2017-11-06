using StudyNetCore.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using StudyNetCore.Repository.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace StudyNetCore.Repository.Repository
{
    public class OrderRepository : IOrderRepository
    {
        ImageContext _db;
        public OrderRepository(ImageContext image)
        {
            _db = image;
        }
        public Task<List<Order>> GetOrder()
        {
            return _db.Order.Include("OrderDetail").Include("OrderStatus").ToListAsync();
        }

        public async Task<IEnumerable<OrderDetail>> GetOrderDetail(int id)
        {
            var orderDetail = await _db.OrderDetail.Include("Product").Where(x=>x.OrderId == id).ToListAsync();        
            return orderDetail; 
        }

        public async Task<int> CreateOrder(Order data)
        {
            var order = new Order();
            order = data;
            var neworder = _db.Order.Add(order);
            await _db.SaveChangesAsync();
            return neworder.Entity.Id;
        }

        public async Task<bool> UpdateOrder(Order data)
        {
            var order = _db.Order.Where(x => x.Id == data.Id).SingleOrDefault();
            if (order != null)
            {
                order.Address = data.Address;
                order.Email = data.Email;
                order.Name = data.Name;
                order.Note = data.Note;
                order.Phone = data.Phone;
                order.StatusId = data.StatusId;
                await _db.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> RemoveOrder(int id)
        {
            var order = await _db.Order.FindAsync(id);
            _db.Order.Remove(order);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<bool> CreateOrderDetail(OrderDetail data)
        {
            var orderdetail = new OrderDetail();
            orderdetail = data;
            await _db.OrderDetail.AddAsync(orderdetail);
            await _db.SaveChangesAsync();
            return true;
        }
    }
}
