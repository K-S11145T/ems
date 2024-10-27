const employees = [
    { 
        id: 1, 
        name: "John Doe",
        email: "john.doe@example.com", 
        password: "123",
        tasks: [
            { 
                taskNumber: 1,
                taskTitle: "Develop Login Page", 
                taskDescription: "Create the frontend and backend for user authentication", 
                taskDate: "2024-10-01", 
                category: "Development", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "high",
                color: "#FF4136"
            },
            { 
                taskNumber: 2,
                taskTitle: "Fix Dashboard Bugs", 
                taskDescription: "Resolve bugs in the admin dashboard", 
                taskDate: "2024-10-05", 
                category: "Bug Fixing", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "medium",
                color: "#FFDC00"
            },
            { 
                taskNumber: 3,
                taskTitle: "Prepare Project Report", 
                taskDescription: "Compile and format the project report", 
                taskDate: "2024-10-08", 
                category: "Documentation", 
                active: false, 
                newTask: true, 
                completed: false, 
                failed: false,
                priority: "low",
                color: "#2ECC40"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 0
        }
    },
    { 
        id: 2, 
        name: "Jane Smith",
        email: "jane.smith@example.com", 
        password: "123",
        tasks: [
            { 
                taskNumber: 1,
                taskTitle: "Design New Landing Page", 
                taskDescription: "Create a new design for the company landing page", 
                taskDate: "2024-10-02", 
                category: "Design", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "high",
                color: "#FF4136"
            },
            { 
                taskNumber: 2,
                taskTitle: "Update User Profiles", 
                taskDescription: "Add new fields to the user profile section", 
                taskDate: "2024-10-06", 
                category: "Development", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "medium",
                color: "#FFDC00"
            },
            { 
                taskNumber: 3,
                taskTitle: "Optimize Images", 
                taskDescription: "Compress and optimize images for the website", 
                taskDate: "2024-10-09", 
                category: "Optimization", 
                active: false, 
                newTask: true, 
                completed: false, 
                failed: false,
                priority: "low",
                color: "#2ECC40"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 0
        }
    },
    { 
        id: 3, 
        name: "Mike Johnson",
        email: "mike.johnson@example.com", 
        password: "123",
        tasks: [
            { 
                taskNumber: 1,
                taskTitle: "Implement Payment Gateway", 
                taskDescription: "Integrate the payment system with Stripe", 
                taskDate: "2024-10-03", 
                category: "Development", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "high",
                color: "#FF4136"
            },
            { 
                taskNumber: 2,
                taskTitle: "Fix Mobile View", 
                taskDescription: "Resolve issues on the mobile version of the website", 
                taskDate: "2024-10-07", 
                category: "Bug Fixing", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "medium",
                color: "#FFDC00"
            },
            { 
                taskNumber: 3,
                taskTitle: "Add FAQ Section", 
                taskDescription: "Create a frequently asked questions section", 
                taskDate: "2024-10-10", 
                category: "Content", 
                active: false, 
                newTask: true, 
                completed: false, 
                failed: false,
                priority: "low",
                color: "#2ECC40"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 0
        }
    },
    { 
        id: 4, 
        name: "Emily Brown",
        email: "emily.brown@example.com", 
        password: "123",
        tasks: [
            { 
                taskNumber: 1,
                taskTitle: "Develop API Endpoints", 
                taskDescription: "Build the API endpoints for the project", 
                taskDate: "2024-10-04", 
                category: "Backend Development", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "high",
                color: "#FF4136"
            },
            { 
                taskNumber: 2,
                taskTitle: "Refactor Codebase", 
                taskDescription: "Clean up and refactor the existing code", 
                taskDate: "2024-10-08", 
                category: "Refactoring", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "medium",
                color: "#FFDC00"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 0,
            completed: 0,
            failed: 0
        }
    },
    { 
        id: 5, 
        name: "Alex Wilson",
        email: "alex.wilson@example.com", 
        password: "123",
        tasks: [
            { 
                taskNumber: 1,
                taskTitle: "Create Social Media Posts", 
                taskDescription: "Design posts for the company's social media", 
                taskDate: "2024-10-03", 
                category: "Marketing", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "high",
                color: "#FF4136"
            },
            { 
                taskNumber: 2,
                taskTitle: "SEO Audit", 
                taskDescription: "Perform a full SEO audit on the website", 
                taskDate: "2024-10-05", 
                category: "SEO", 
                active: true, 
                newTask: false, 
                completed: false, 
                failed: false,
                priority: "medium",
                color: "#FFDC00"
            },
            { 
                taskNumber: 3,
                taskTitle: "Prepare Monthly Report", 
                taskDescription: "Create the monthly report for team performance", 
                taskDate: "2024-10-09", 
                category: "Analytics", 
                active: false, 
                newTask: true, 
                completed: false, 
                failed: false,
                priority: "low",
                color: "#2ECC40"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 0
        }
    }
  ];
  
  const admin = [{
    id: 101,
    email: "admin@example.com",
    password: "123",
    name: "Kroloadster"
  }];
  
  
  export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    
    return {employees,admin}
  
  }
  
  