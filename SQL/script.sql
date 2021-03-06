USE [Image]
GO
/****** Object:  Table [dbo].[Artist]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Artist](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Description] [nvarchar](4000) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Class]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Class](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Image]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1000) NULL,
	[Description] [nvarchar](4000) NULL,
	[ImgPath] [nvarchar](4000) NULL,
	[Height] [float] NULL,
	[Width] [float] NULL,
	[ArtistId] [int] NULL,
	[Price] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Order]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Order](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1000) NULL,
	[Address] [nvarchar](4000) NULL,
	[Phone] [varchar](100) NULL,
	[Note] [nvarchar](1000) NULL,
	[StatusId] [int] NULL,
	[Email] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[OrderDetail]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NULL,
	[ProductId] [int] NULL,
	[Quantity] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[OrderStatus]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderStatus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Student]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[ClassId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[User]    Script Date: 11/4/2017 5:42:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Artist] ON 

INSERT [dbo].[Artist] ([Id], [Name], [Description]) VALUES (1, N'Khoi', N'Fresh artist')
INSERT [dbo].[Artist] ([Id], [Name], [Description]) VALUES (2, N'Phat', N'Senior artist')
SET IDENTITY_INSERT [dbo].[Artist] OFF
SET IDENTITY_INSERT [dbo].[Class] ON 

INSERT [dbo].[Class] ([Id], [Name]) VALUES (1, N'Sinh')
INSERT [dbo].[Class] ([Id], [Name]) VALUES (2, N'Toan')
SET IDENTITY_INSERT [dbo].[Class] OFF
SET IDENTITY_INSERT [dbo].[Image] ON 

INSERT [dbo].[Image] ([Id], [Name], [Description], [ImgPath], [Height], [Width], [ArtistId], [Price]) VALUES (1, N'Long Night', N'long night fall', N'https://images-na.ssl-images-amazon.com/images/I/81M99Ngv18L._SL1024_.jpg', 630, 1638, 1, 200000)
INSERT [dbo].[Image] ([Id], [Name], [Description], [ImgPath], [Height], [Width], [ArtistId], [Price]) VALUES (2, N'cybog girl', N'cyborg girl', N'https://i.pinimg.com/736x/e0/3b/d0/e03bd0c4c05e76ae8605462336b40e7a--graphic-design-studios-art-design.jpg', 200, 500, 2, 3000000)
INSERT [dbo].[Image] ([Id], [Name], [Description], [ImgPath], [Height], [Width], [ArtistId], [Price]) VALUES (3, N'flower', N'flower', N'https://i.imgur.com/FmYxs4v.jpg?fb', 812, 825, 1, 5000000)
INSERT [dbo].[Image] ([Id], [Name], [Description], [ImgPath], [Height], [Width], [ArtistId], [Price]) VALUES (6, N'ahihi', N'des', N'https://i.imgur.com/J0NR3Wd.jpg', 2, 2, 1, 200000)
INSERT [dbo].[Image] ([Id], [Name], [Description], [ImgPath], [Height], [Width], [ArtistId], [Price]) VALUES (7, N'night', N'nigth', N'https://i.imgur.com/R3mnVn6.jpg', 2, 2, 1, 2)
SET IDENTITY_INSERT [dbo].[Image] OFF
SET IDENTITY_INSERT [dbo].[Student] ON 

INSERT [dbo].[Student] ([Id], [Name], [ClassId]) VALUES (1, N'Khoi', 1)
INSERT [dbo].[Student] ([Id], [Name], [ClassId]) VALUES (2, N'Nam', 1)
INSERT [dbo].[Student] ([Id], [Name], [ClassId]) VALUES (3, N'Thien', 2)
SET IDENTITY_INSERT [dbo].[Student] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([ID], [UserName], [Password]) VALUES (1, N'admin', N'password')
INSERT [dbo].[User] ([ID], [UserName], [Password]) VALUES (2, N'student1', N'123456')
INSERT [dbo].[User] ([ID], [UserName], [Password]) VALUES (3, N'student2', N'123456')
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[Image]  WITH CHECK ADD FOREIGN KEY([ArtistId])
REFERENCES [dbo].[Artist] ([Id])
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD FOREIGN KEY([StatusId])
REFERENCES [dbo].[OrderStatus] ([Id])
GO
ALTER TABLE [dbo].[OrderDetail]  WITH CHECK ADD FOREIGN KEY([OrderId])
REFERENCES [dbo].[Order] ([Id])
GO
ALTER TABLE [dbo].[OrderDetail]  WITH CHECK ADD FOREIGN KEY([ProductId])
REFERENCES [dbo].[Image] ([Id])
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD FOREIGN KEY([ClassId])
REFERENCES [dbo].[Class] ([Id])
GO
