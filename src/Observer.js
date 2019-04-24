// 求职者
class JobFinder {
    constructor(id, job) {
        this.id = id;
        this.job = job;
        this.status = null;
    }

    subscribe(employee) {
        employee.jobFinderList.push(this);
    }

    unsubscribe(employee) {
        employee.jobFinderList = employee.jobFinderList.filter(person => person.id !== this.id)
    }

    update(status) {
        this.status = status;
        console.log(this.id + '知道自己求职状态变更为：' + status);
    }
}
// 公司
class Employee {
    constructor() {
        // 求职者列表
        this.jobFinderList = [];
    }
    // 内推
    recommend(JobFinder) {
        JobFinder.subscribe(this);
    }
    // 通知求职者
    notify(message) {
        this.jobFinderList.forEach(person => {
            const target = message.find(m => m.id === person.id)
            if (target) person.update(target.status);
        })
    }
}

var me = new Employee();

var zs = new JobFinder('张三', '前端工程师');
var ls = new JobFinder('李四', '后端工程师');

// 内推张三和李四
me.recommend(zs);
me.recommend(ls);

// 通知他们
setTimeout(() => {
    me.notify([
        { id: '张三', status: '简历评估中' }
    ]);
}, 1000)

setTimeout(() => {
    me.notify([
        { id: '张三', status: '面试中' }
    ]);
}, 2000)

setTimeout(() => {
    me.notify([
        { id: '张三', status: 'offer' },
        { id: '李四', status: '简历评估中' }
    ]);
}, 2000)