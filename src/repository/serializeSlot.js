export function serializePostTimetable({
    course,
    timetable_id,
    semester_id,
    academic_year_id,
    type,
    start,
    end,
    duration,
    group_id
}) {
    let data = {};
    if (course) data.course_program_id = course.id
    if (timetable_id) data.timetable_id = timetable_id;
    if (semester_id) data.semester_id = semester_id;
    if (type) data.type = type;
    if (academic_year_id) data.academic_year_id = academic_year_id;
    if (start) data.start = start;
    if (end) data.end = end;
    if (duration) data.durations = duration;
    if(group_id) data.group_id=group_id;
    return data;

}