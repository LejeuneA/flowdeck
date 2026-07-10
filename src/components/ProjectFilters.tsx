import type { Project } from "../types/Project";

type FilterStatus = "All" | Project["status"];

type ProjectFiltersProps = {
    selectedStatus: FilterStatus;
    onStatusChange: (status: FilterStatus) => void;
};

const filterOptions: FilterStatus[] = [
    "All",
    "To Do",
    "In Progress",
    "Completed",
];

function ProjectFilters({
    selectedStatus,
    onStatusChange,
}: ProjectFiltersProps) {
    return (
        <div className="flowdeck__filters">
            {filterOptions.map((status) => (
                <button
                    key={status}
                    className={`filter-button ${selectedStatus === status ? "filter-button--active" : ""
                        }`}
                    onClick={() => onStatusChange(status)}
                >
                    {status}
                </button>
            ))}
        </div>
    );
}

export default ProjectFilters;
