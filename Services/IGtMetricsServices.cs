using System.Collections.Generic;
using System.Threading.Tasks;
using SitefinityPerformaceTest.Models;

namespace SitefinityPerformaceTest.Services
{
    public interface IGtMetricsServices
    {
        GtMetrics Add(GtMetrics gtMetric);
        GtMetrics Get(int id);
        IEnumerable<GtMetrics> GetAll();
        void Remove(int id);
        Task<GtMetrics> Test(string url, int companyId);
    }
}