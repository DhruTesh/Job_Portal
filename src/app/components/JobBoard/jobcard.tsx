import { Job } from "../../components/JobBoard/types/job";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{job.company}</h3>
      <p className="text-gray-600">{job.role}</p>
      <p className="text-sm text-gray-400">Posted on {job.posted}</p>
    </div>
  );
};

export default JobCard;
