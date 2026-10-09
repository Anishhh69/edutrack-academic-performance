import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import DataTable from "../components/DataTable";
import ClassPerformanceChart from "../components/ClassPerformanceChart";

import {
  teacherData,
  teacherSubjects,
} from "../data/mockData";

import "./TeacherReport.css";

function TeacherReport() {
  const subjectColumns = [
    { key: "subject", label: "Subject" },
    { key: "students", label: "Students" },
    { key: "performance", label: "Performance" },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header
          title="Teacher Performance Report"
          subtitle="Overview of teaching and student performance"
        />

        <div className="teacher-report-content">

          <SectionCard className="teacher-profile-card">
            <div className="teacher-profile">
              <div className="teacher-avatar">RS</div>

              <div className="teacher-info">
                <h2>{teacherData.name}</h2>

                <p>
                  Teacher ID: {teacherData.teacherId}
                </p>

                <div className="teacher-meta">
                  <span>{teacherData.department}</span>
                  <span>•</span>
                  <span>
                    Academic Year {teacherData.academicYear}
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>

          <div className="teacher-stats-grid">

            <StatCard
              title="Classes Taught"
              value={teacherData.classesTaught}
              change="Current semester"
            />

            <StatCard
              title="Total Students"
              value={teacherData.totalStudents}
              change="Across all classes"
            />

            <StatCard
              title="Average Performance"
              value={teacherData.averagePerformance}
              change="Student average"
            />

          </div>

          <SectionCard title="Subject Performance">
            <DataTable
              columns={subjectColumns}
              data={teacherSubjects}
            />
          </SectionCard>

          <SectionCard title="Class Performance Overview">
  <ClassPerformanceChart />
</SectionCard>

        </div>
      </main>
    </div>
  );
}

export default TeacherReport;