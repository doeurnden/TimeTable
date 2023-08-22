<template>
    <div class="FullCalendar_Middle">
        <FullCalendar :options="calendarOptions" />
        <h1>Hello</h1>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue3'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction'

    export default{
        components: {
            FullCalendar
        },
        data() {
            return {
                calendarOptions:{
                    plugins: [dayGridPlugin, interactionPlugin],
                    initialViews: 'dayGridPlugin, interactionPlugin',
                    dateClick: this.handleDateClick,
                    events: [
                        { title: 'event 1', date: '2019-04-01' },
                        { title: 'event 2', date: '2019-04-02' }
                    ]
                }
            }
        },
        methods: {
            handleDateClick: function(arg) {
                alert('date click! ' + arg.dateStr)
            }
        }
    }
</script>

<style scoped>
    .FullCalendar_Middle{
        width: 60%;
        height: 100%;
        /* background-color: blueviolet; */
    }
</style>