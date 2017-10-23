using AutoMapper;
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
                    opt => opt.MapFrom(x=> x.Artist.Name)
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
    }
}
