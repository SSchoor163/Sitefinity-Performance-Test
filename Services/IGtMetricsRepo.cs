using System.Collections.Generic;
using SitefinityPerformaceTest.Models;

namespace SitefinityPerformaceTest.Services
{
    public interface IGtMetricsRepo
    {
        GtMetrics Add(GtMetrics newMetric);
        GtMetrics Get(int companyId);
        IEnumerable<GtMetrics> GetAll();
        void Remove(int companyId);
        GtMetrics Update(GtMetrics newMetric);
    }
}