using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StudyNetCore.Repository.Models
{
    public partial class ImageContext : DbContext
    {
        public virtual DbSet<Artist> Artist { get; set; }
        public virtual DbSet<Class> Class { get; set; }
        public virtual DbSet<Image> Image { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<OrderDetail> OrderDetail { get; set; }
        public virtual DbSet<OrderStatus> OrderStatus { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<User> User { get; set; }

        public ImageContext(DbContextOptions<ImageContext> options)
    : base(options)
        { }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Artist>(entity =>
        //    {
        //        entity.Property(e => e.Description).HasColumnType("nvarchar");

        //        entity.Property(e => e.Name).HasMaxLength(100);
        //    });

        //    modelBuilder.Entity<Class>(entity =>
        //    {
        //        entity.Property(e => e.Name).HasMaxLength(50);
        //    });

        //    modelBuilder.Entity<Image>(entity =>
        //    {
        //        entity.Property(e => e.Description).HasColumnType("nvarchar(4000)");

        //        entity.Property(e => e.ImgPath).HasColumnType("nvarchar(4000)");

        //        entity.Property(e => e.Name).HasMaxLength(1000);

        //        entity.HasOne(d => d.Artist)
        //            .WithMany(p => p.Image)
        //            .HasForeignKey(d => d.ArtistId)
        //            .HasConstraintName("FK__Image__ArtistId__4BAC3F29");
        //    });

        //    modelBuilder.Entity<Order>(entity =>
        //    {
        //        entity.Property(e => e.Address).HasColumnType("nvarchar");

        //        entity.Property(e => e.Email)
        //            .HasMaxLength(100)
        //            .IsUnicode(false);

        //        entity.Property(e => e.Name).HasMaxLength(1000);

        //        entity.Property(e => e.Note).HasMaxLength(1000);

        //        entity.Property(e => e.Phone)
        //            .HasMaxLength(100)
        //            .IsUnicode(false);

        //        entity.HasOne(d => d.Status)
        //            .WithMany(p => p.Order)
        //            .HasForeignKey(d => d.StatusId)
        //            .HasConstraintName("FK__Order__StatusId__5070F446");
        //    });

        //    modelBuilder.Entity<OrderDetail>(entity =>
        //    {
        //        entity.HasOne(d => d.Order)
        //            .WithMany(p => p.OrderDetail)
        //            .HasForeignKey(d => d.OrderId)
        //            .HasConstraintName("FK__OrderDeta__Order__571DF1D5");

        //        entity.HasOne(d => d.Product)
        //            .WithMany(p => p.OrderDetail)
        //            .HasForeignKey(d => d.ProductId)
        //            .HasConstraintName("FK__OrderDeta__Produ__5812160E");
        //    });

        //    modelBuilder.Entity<OrderStatus>(entity =>
        //    {
        //        entity.Property(e => e.Name).HasMaxLength(100);
        //    });

        //    modelBuilder.Entity<Student>(entity =>
        //    {
        //        entity.Property(e => e.Name).HasMaxLength(100);

        //        entity.HasOne(d => d.Class)
        //            .WithMany(p => p.Student)
        //            .HasForeignKey(d => d.ClassId)
        //            .HasConstraintName("FK__Student__ClassId__267ABA7A");
        //    });

        //    modelBuilder.Entity<User>(entity =>
        //    {
        //        entity.Property(e => e.Id).HasColumnName("ID");

        //        entity.Property(e => e.Password).HasMaxLength(50);

        //        entity.Property(e => e.UserName).HasMaxLength(50);
        //    });
        //}
    }
}
