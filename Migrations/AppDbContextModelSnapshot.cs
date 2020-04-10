﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SitefinityPerformaceTest;

namespace Sitefinity_Performance_Test.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("SitefinityPerformaceTest.Models.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BusinessType");

                    b.Property<string>("City");

                    b.Property<string>("CompanyName");

                    b.Property<DateTime>("ConfirmedVersionDate");

                    b.Property<bool>("Contacted");

                    b.Property<string>("Country");

                    b.Property<DateTime?>("EndEnterpriseSupport");

                    b.Property<int?>("GtMetricsId");

                    b.Property<string>("Notes");

                    b.Property<double?>("PreviousVersion");

                    b.Property<int>("RankingScale");

                    b.Property<double>("SfVersion");

                    b.Property<DateTime?>("SitefinityRetirmentDate");

                    b.Property<string>("State_Region");

                    b.Property<string>("Street");

                    b.Property<string>("Url");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.HasIndex("GtMetricsId");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("SitefinityPerformaceTest.Models.GtMetrics", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BackendDuration");

                    b.Property<int>("CompanyId");

                    b.Property<int?>("ConnectionDuration");

                    b.Property<int?>("DomContentLoadedDuration");

                    b.Property<int?>("DomContentLoadedTime");

                    b.Property<int?>("DomInteractiveTime");

                    b.Property<string>("Error");

                    b.Property<string>("FilmStrip");

                    b.Property<int?>("FirstContentfulPaintTime");

                    b.Property<int?>("FirstPaintTime");

                    b.Property<int?>("FullyLoadedTime");

                    b.Property<string>("HARFile");

                    b.Property<int?>("HtmlBytes");

                    b.Property<int?>("HtmlLoadTime");

                    b.Property<int?>("OnloadTime");

                    b.Property<int?>("PageBytes");

                    b.Property<int?>("PageElements");

                    b.Property<int?>("PageLoadTime");

                    b.Property<string>("PageSpeed");

                    b.Property<string>("PageSpeedFiles");

                    b.Property<int?>("PageSpeedScore");

                    b.Property<int?>("RedirectDuration");

                    b.Property<string>("ReportPdf");

                    b.Property<string>("ReportPdfFull");

                    b.Property<string>("ReportUrl");

                    b.Property<int?>("RumSpeedIndex");

                    b.Property<string>("Screenshot");

                    b.Property<string>("Status");

                    b.Property<string>("Video");

                    b.Property<string>("YSlow");

                    b.Property<int?>("YSlowScore");

                    b.HasKey("Id");

                    b.ToTable("GtMetrics");
                });

            modelBuilder.Entity("SitefinityPerformaceTest.Models.Company", b =>
                {
                    b.HasOne("SitefinityPerformaceTest.Models.GtMetrics", "GtMetrics")
                        .WithMany()
                        .HasForeignKey("GtMetricsId");
                });
#pragma warning restore 612, 618
        }
    }
}