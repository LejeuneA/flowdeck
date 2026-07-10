import type { ProjectStatusFilter } from "../types/Project";

type ProjectFiltersProps = {
    selectedStatus: ProjectStatusFilter;
    onStatusChange: (status: ProjectStatusFilter) => void;
};

const filterOptions: ProjectStatusFilter[] = [
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
