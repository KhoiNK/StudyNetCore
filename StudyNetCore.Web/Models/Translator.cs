﻿using AutoMapper;
using StudyNetCore.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyNetCore.Web.Models
{
    public static class Translator
    {
        private static IMapper Mapper;
        public static void InitMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ImageViewModel, Image>();
                cfg.CreateMap<Image, ImageViewModel>()
                .ForMember(
                    view => view.ArtistName,
                    opt => opt.MapFrom(x => x.Artist.Name)
                );

                cfg.CreateMap<ArtistViewModel, Artist>();
                cfg.CreateMap<Artist, ArtistViewModel>();

                cfg.CreateMap<Order, OrderViewModel>()
                .ForMember(
                    dto => dto.Status,
                    opt => opt.MapFrom(entity => entity.Status.Name)
                );
                cfg.CreateMap<OrderViewModel, Order>();

                cfg.CreateMap<OrderDetailViewModel, OrderDetail>();
                cfg.CreateMap<OrderDetail, OrderDetailViewModel>()
                .ForMember(
                    dto => dto.Name,
                    opt => opt.MapFrom(entity => entity.Product.Name)
                )
                .ForMember(
                    dto => dto.ImgLink,
                    opt => opt.MapFrom(entity => entity.Product.ImgPath)
                );
            });
            Mapper = config.CreateMapper();
        }

        //Map from model Tfrom to model TTo
        public static TTo Translate<TFrom, TTo>(this TFrom dto)
        {
            return Mapper.Map<TTo>(dto);
        }

        //Map list
        public static IEnumerable<TTo> Translate<TFrom, TTo>(this IEnumerable<TFrom> dto)
        {
            return Mapper.Map<IEnumerable<TTo>>(dto);
        }

        public static ArtistViewModel ToArtistViewModel(Artist data)
        {
            var artist = new ArtistViewModel();
            artist.Id = data.Id;
            artist.Name = data.Name;
            artist.Description = data.Description;
            foreach (var image in data.Image)
            {
                artist.Images.ToList().Add(image.Translate<Image, ImageViewModel>());
            }
            return artist;
        }
    }
}
