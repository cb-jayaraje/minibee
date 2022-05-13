import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/customers/Customers.vue';
import Dashboard from '../views/dashboards/dashboard.vue';
import Main from '../views/dashboards/main.vue';
import Sites from '../views/Sites.vue';
import Signin from './../views/Signin.vue'
import Subscriptions from './../views/subscription/Subscription.vue'
import Invoices from './../views/invoices/Invoices.vue'
import CreditNotes from './../views/creditnotes/CreditNotes.vue'
import Quotes from './../views/quotes/Quotes.vue'
import Orders from './../views/orders/Orders.vue'
import Plans from './../views/productcatelog/plans/Plans.vue'
import Addons from './../views/productcatelog/addons/AddOns.vue'
import Coupons from './../views/productcatelog/coupons/Coupon.vue'
import CouponsSets from './../views/productcatelog/coupons/CouponSet.vue'
import Transactions from './../views/logs/Transactions.vue'
import EmailLogs from './../views/logs/EmailLogs.vue'
import Events from './../views/logs/Events.vue'
import RevenueDashboard from './../views/revenuestory/RevenueStoryDashboard.vue'
import MetricExplorer from './../views/revenuestory/MetricExplores.vue'
import CustomerInsight from './../views/revenuestory/CustomerInsights.vue'
import AccountingReports from './../views/revenuestory/AccountingReports.vue'
import ReportBuilder from './../views/revenuestory/ReportBuilder.vue'
import AlertGoals from './../views/revenuestory/AlertsGoals.vue'
import ClassicReport from './../views/classicreports/ClassicReports.vue'
import Apps from './../views/apps/Apps.vue'
import ConfigureChargebee from './../views/settings/configurechargebee/ConfigureChargebee.vue'
import ThirdPartyIntegrations from './../views/settings/third-party/ThirdPartyIntegrations.vue'
import ImportExport from './../views/settings/import-export/ImportExport.vue'
import TeamMembers from './../views/settings/team-members/TeamMembers.vue'
import ChargebeeNotifications from './../views/settings/chargebee-notification/ChargebeeNotifications.vue'
import Security from './../views/settings/security/Security.vue'



const routes = [
    {
        path: '/',
        name: 'Signin',
        component: Signin

    },
    {
        path: '/sites/select',
        name: 'Sites',
        component: Sites
    },
    {
        path: '/dashboards',
        name: 'Dashboards',
        component: Dashboard,
        props: true,
        children: [
            { path: "", component: Main },
            {path: "/customers", component: Customers},
            {path: "/subscriptions", component: Subscriptions },
            {path: "/invoices", component: Invoices },
            {path: "/credit_notes", component: CreditNotes },
            {path: "/quotes", component: Quotes },
            {path: "/orders", component: Orders },
            {path: "/plans", component: Plans },
            {path: "/addons", component: Addons },
            {path: "/coupons", component: Coupons },
            {path: "/coupon_sets", component: CouponsSets },
            {path: "/transactions", component: Transactions },
            {path: "/email_notifications", component: EmailLogs },
            {path: "/events", component: Events },
            {path: "/revenuestory", component: RevenueDashboard },
            {path: "/metric", component: MetricExplorer },
            {path: "/customer_report", component: CustomerInsight },
            {path: "/accounts", component: AccountingReports },
            {path: "/alert", component: AlertGoals },
            {path: "/report_builder", component: ReportBuilder },
            {path: "/classic_reports", component: ClassicReport },
            {path: "/apps", component: Apps },
            {path: "/settings", component: ConfigureChargebee },
            {path: "/legacy_integrations", component: ThirdPartyIntegrations },
            {path: "/import_and_export", component: ImportExport },
            {path: "/users", component: TeamMembers },
            {path: "/chargebee_notifications", component: ChargebeeNotifications },
            {path: "/security", component: Security },

        ],
        
    },

    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router