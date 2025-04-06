import { useState, useEffect } from "react";
import { JobCard } from "../../components/Job Board/JobCard";
import { Job } from "../types/job";

export default function ProductJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) =>
        setJobs(data.filter((job) => job.category === "Product"))
      );
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
