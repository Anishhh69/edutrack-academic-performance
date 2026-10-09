import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import DataTable from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import SubjectPerformanceChart from "../components/SubjectPerformanceChart";

import {
  studentData,
  studentSubjects,
} from "../data/mockData";

import "./StudentReport.css";

function StudentReport() {
  const subjectColumns = [
    {
      key: "subject",
      label: "Subject",
    },
    {
      key: "score",
      label: "Score",
    },
    {
      key: "grade",
      label: "Grade",
    },
    {
      key: "performance",
      label: "Performance",
      type: "status",
    },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header
          title="Student Performance Report"
          subtitle="Detailed academic performance and progress"
        />

        <div className="student-report-content">

          {/* Student Profile */}

          <SectionCard className="student-profile-card">
            <div className="student-profile">
              <div className="student-avatar">
                AG
              </div>

              <div className="student-info">
                <h2>{studentData.name}</h2>

                <p>
                  Student ID: {studentData.studentId}
                </p>

                <div className="student-meta">
                  <span>
                    {studentData.program}
                  </span>

                  <span>•</span>

                  <span>
                    {studentData.semester}
                  </span>

                  <span>•</span>

                  <span>
                    Academic Year {studentData.academicYear}
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Statistics */}

          <div className="student-stats-grid">

            <StatCard
              title="GPA"
              value={studentData.gpa}
              change="Current semester"
            />

            <StatCard
              title="Attendance"
              value={studentData.attendance}
              change="Overall attendance"
            />

            <StatCard
              title="Overall Performance"
              value={studentData.overallPerformance}
              change="Current performance"
            />

          </div>

          {/* Subject Performance */}

          <SectionCard title="Subject Performance">
            <DataTable
              columns={subjectColumns}
              data={studentSubjects}
            />
          </SectionCard>

          {/* Performance Chart */}

          <SectionCard title="Performance by Subject">
  <SubjectPerformanceChart />
</SectionCard>

        </div>
      </main>
    </div>
  );
}

export default StudentReport;