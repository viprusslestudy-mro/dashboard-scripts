<!DOCTYPE html>

<html lang="ru">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Еженедельный Отчёт</title>

    

    

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet">

    

    

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    

    

    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    

    

    <style>

     



     

    body {

        font-family: 'Inter', system-ui, sans-serif;

        background: linear-gradient(135deg, #faf5ff 0%, #fef7f0 25%, #fffbeb 50%, #fdf4ff 75%, #f5f3ff 100%);

        background-attachment: fixed;

        min-height: 100vh;

    }



     

    .gradient-header {

        background: linear-gradient(135deg, #1e293b 0%, #334155 60%, #44403c 100%);

    }



     

    .card-shadow {

        box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.05), 0 2px 10px -5px rgba(0, 0, 0, 0.03);

    }



    .card-shadow-lg {

        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);

    }



     

    .glass-panel {

        background: rgba(255, 255, 255, 0.4);

        backdrop-filter: blur(16px);

        -webkit-backdrop-filter: blur(16px);

        border: 1px solid rgba(255, 255, 255, 0.5);

        box-shadow: inset 0 0 40px rgba(251, 243, 219, 0.3);

    }



     

    .glass-panel-accent {

        background: rgba(255, 251, 235, 0.5);

        backdrop-filter: blur(12px);

        -webkit-backdrop-filter: blur(12px);

        border: 1px solid rgba(253, 230, 138, 0.4);

        box-shadow: 0 8px 32px 0 rgba(252, 211, 77, 0.05);

    }



    .glass-panel-dark {

        background: rgba(255, 255, 255, 0.1);

        backdrop-filter: blur(8px);

        -webkit-backdrop-filter: blur(8px);

        border: 1px solid rgba(255, 255, 255, 0.2);

    }



     

    .tab-active {

        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);

        color: white;

        border-radius: 0.5rem 0.5rem 0 0;

    }



    .tab-inactive {

        color: #fcd34d;

        background: transparent;

    }



    .tab-inactive:hover {

        color: #fde047;

        background: rgba(251, 191, 36, 0.1);

    }



     

    .subtab-active {

        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);

        color: white;

    }



    .subtab-inactive {

        background: #fef3c7;

        color: #92400e;

    }



    .subtab-inactive:hover {

        background: #fde68a;

    }



     

    .proj-active {

        border-color: #3b82f6 !important;

        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%) !important;

    }



    .proj-inactive {

        opacity: 0.7;

    }



    .proj-inactive:hover {

        opacity: 1;

    }



     

    .metric-btn-active {

         

        color: white;

        font-weight: 600;

        border: 2px solid transparent;

        backdrop-filter: blur(8px);

        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    }



    .metric-btn-active:hover {

        transform: translateY(-1px);

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    }



    .metric-btn-inactive {

        background: #e2e8f0;

        color: #64748b;

        border: 2px solid transparent;

    }



    .metric-btn-inactive:hover {

        background: #cbd5e1;

        color: #475569;

        transform: translateY(-1px);

        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    }



    .metric-btn-reset {

        background: #fee2e2;

        color: #dc2626;

    }



    .metric-btn-reset:hover {

        background: #fecaca;

    }



     

    .day-btn-active {

        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);

        color: white;

        font-size: 14px;

        font-weight: 800;

        box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);

        border: 2px solid transparent;

    }



    .day-btn-inactive {

        background: rgba(255, 255, 255, 0.5);

        color: #64748b;

        font-size: 13px;

        font-weight: 700;

        border: 2px solid #1e293b;

    }



    .day-btn-inactive:hover {

        background: rgba(251, 191, 36, 0.15);

        color: #334155;

        transform: translateY(-1px);

        border-color: rgba(251, 191, 36, 0.8);

        box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.25);

    }



     

    .premium-info-text {

        font-size: 20px;

        letter-spacing: -0.01em;

        font-weight: 800;

        color: #334155;

        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);

        font-family: 'Comfortaa', 'Inter', sans-serif;

    }



     

    .locale-card {

        border-radius: 1rem;

        overflow: hidden;

        transition: transform 0.2s, box-shadow 0.2s;

    }



    .locale-card:hover {

        transform: translateY(-2px);

        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

    }



    .locale-card-header {

        padding: 1rem 1.25rem;

        display: flex;

        justify-content: space-between;

        align-items: center;

    }



    .locale-card-body {

        background: white;

        padding: 1rem 1.25rem;

    }



     

    .metric-bar {

        height: 6px;

        background: #e2e8f0;

        border-radius: 3px;

        overflow: hidden;

    }



    .metric-bar-fill {

        height: 100%;

        border-radius: 3px;

        transition: width 0.5s ease-out;

    }



     

    .status-good {

        background: #d1fae5;

        color: #047857;

    }



    .status-warning {

        background: #fef3c7;

        color: #b45309;

    }



    .status-bad {

        background: #fee2e2;

        color: #dc2626;

    }



     

    .task-card {

        background: white;

        border-radius: 0.75rem;

        padding: 1rem;

        border-left: 4px solid;

        transition: transform 0.2s;

    }



    .task-card:hover {

        transform: translateX(4px);

    }



    .task-card-spinbetter {

        border-left-color: #f59e0b;

    }



    .task-card-coldbet {

        border-left-color: #10b981;

    }



    .task-card-general {

        border-left-color: #6366f1;

    }



     

    @keyframes fadeIn {

        from {

            opacity: 0;

            transform: translateY(10px);

        }



        to {

            opacity: 1;

            transform: translateY(0);

        }

    }



    .fade-in {

        animation: fadeIn 0.3s ease-out forwards;

    }



     

    ::-webkit-scrollbar {

        width: 8px;

        height: 8px;

    }



    ::-webkit-scrollbar-track {

        background: #f1f5f9;

    }



    ::-webkit-scrollbar-thumb {

        background: #94a3b8;

        border-radius: 4px;

    }



    ::-webkit-scrollbar-thumb:hover {

        background: #64748b;

    }



     

    @media print {

        .no-print {

            display: none !important;

        }



        .card-shadow {

            box-shadow: none;

            border: 1px solid #e2e8f0;

        }

    }

</style>
</head>

<body class="min-h-screen bg-slate-100">



    

    



<header

    class="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 py-6 px-4 shadow-lg border-b-2 border-amber-200">

    <div class="max-w-7xl mx-auto">

        <div class="flex items-center justify-between flex-wrap gap-4">

            

            <div>

                <h1 class="text-3xl font-bold tracking-tight text-amber-900">🚀 Retenza Supervisor</h1>

                <p class="text-amber-700 mt-1">Статистика и аналитика по проектам</p>

            </div>



            

            <div class="bg-amber-400 rounded-lg px-4 py-2 border-2 border-amber-500 shadow-md">

                <span class="text-sm font-bold text-amber-900">

                    📅

                    Январь
                    2026 |

                    Неделя

                    5
                    (

                    26.01 –

                    01.02)

                    
                </span>

            </div>

        </div>

    </div>

</header>
    

    

    



<div class="bg-slate-700 sticky top-0 z-20 shadow-md no-print">

    <div class="max-w-7xl mx-auto px-4">

        <div class="flex gap-1 overflow-x-auto">

            

            

            <button onclick="showTab('overview')" id="tab-overview" 

                class="tab-active px-6 py-4 font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-base">

                📊 Главная

            </button>

            

            

            <button onclick="showTab('spinbetter')" id="tab-spinbetter" 

                class="tab-inactive px-6 py-4 font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-base">

                🎰 Spinbetter

            </button>

            

            

            <button onclick="showTab('coldbet')" id="tab-coldbet" 

                class="tab-inactive px-6 py-4 font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-base">

                ❄️ Coldbet

            </button>

            

            

            <button onclick="showTab('plans')" id="tab-plans" 

                class="tab-inactive px-6 py-4 font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-base">

                📋 Планы

            </button>

            

            

            <button onclick="showTab('workload')" id="tab-workload" 

                class="tab-inactive px-6 py-4 font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-base">

                📈 Нагрузка

            </button>

            

        </div>

    </div>

</div>




    

    

    <main class="max-w-7xl mx-auto px-4 pb-12 pt-8">

        

        

        



<div id="content-overview">



    

    <section class="mb-8">

        <div

            class="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 rounded-2xl p-6 border-2 border-amber-300 card-shadow">

            <div class="flex items-center gap-3 mb-4">

                <span class="text-3xl">🎯</span>

                <div>

                    <h2 class="text-2xl font-bold text-amber-900">ИТОГИ

                        ЯНВАРЬ
                        2026
                    </h2>

                    <p class="text-amber-700">01.

                        01
                         –

                        01.02
                         | Общие показатели

                    </p>

                </div>

            </div>



            <div class="grid md:grid-cols-2 gap-4">



                

                <div class="bg-white rounded-xl p-4 border-2 border-amber-300 shadow-md">

                    <div class="flex items-center gap-2 mb-3">

                        <span class="text-2xl">🎰</span>

                        <h3 class="font-bold text-lg text-amber-900">Spinbetter — Итоги месяца</h3>

                    </div>

                    <div class="grid grid-cols-3 gap-3 text-sm">

                        

                        <div class="bg-amber-400 border-2 border-amber-500 rounded-lg p-2 text-center shadow-sm">

                            <div class="text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-0.5">Всего чатов (ВЧ)</div>

                            <div class="flex items-baseline justify-center">

                                <div class="font-black text-2xl text-amber-900">

                                    45 269
                                </div>

                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-xs font-bold uppercase tracking-tighter mb-0.5">Эскалировано (КЧ)</div>

                            <div class="font-bold text-xl text-amber-900">

                                28 775
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-xs font-bold uppercase tracking-tighter mb-0.5">Bot Resolution Rate (BRR)</div>

                            <div class="font-bold text-xl text-amber-900">

                                36.4%

                            </div>

                        </div>



                        

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">CSAT

                            </div>

                            <div class="font-black text-xl text-amber-900">

                                59.5%

                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">Оценок

                            </div>

                            <div class="font-black text-xl text-amber-900">

                                348
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">MCR

                            </div>

                            <div class="font-black text-xl text-amber-900">

                                0%

                            </div>

                        </div>



                        

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">FRT

                            </div>

                            <div class="font-black text-lg text-amber-900">

                                0:06
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">ART

                            </div>

                            <div class="font-black text-lg text-amber-900">

                                1:38
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">AHT

                            </div>

                            <div class="font-black text-lg text-amber-900">

                                10:21
                            </div>

                        </div>

                    </div>

                </div>



                

                <div class="bg-white rounded-xl p-4 border-2 border-amber-300 shadow-md">

                    <div class="flex items-center gap-2 mb-3">

                        <span class="text-2xl">❄️</span>

                        <h3 class="font-bold text-lg text-amber-900">Coldbet — Итоги месяца</h3>

                    </div>

                    <div class="grid grid-cols-3 gap-3 text-sm">

                        

                        <div class="bg-amber-400 border-2 border-amber-500 rounded-lg p-2 text-center shadow-sm">

                            <div class="text-amber-900 text-[10px] font-black uppercase tracking-widest mb-0.5">Всего чатов (ВЧ)</div>

                            <div class="flex items-baseline justify-center">

                                <div class="font-black text-2xl text-amber-900">

                                    24 823
                                </div>

                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">Эскалировано (КЧ)</div>

                            <div class="font-bold text-xl text-amber-900">

                                18 063
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">Bot Resolution Rate (BRR)</div>

                            <div class="font-bold text-xl text-amber-900">

                                27.2%

                            </div>

                        </div>



                        

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">CSAT

                            </div>

                            <div class="font-black text-xl text-amber-900">

                                77.8%

                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">Оценок

                            </div>

                            <div class="font-black text-xl text-amber-900">

                                9
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">MCR

                            </div>

                            <div class="font-black text-xl text-amber-900">

                                0.1%

                            </div>

                        </div>



                        

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">FRT

                            </div>

                            <div class="font-black text-lg text-amber-900">

                                0:08
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">ART

                            </div>

                            <div class="font-black text-lg text-amber-900">

                                1:59
                            </div>

                        </div>

                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">

                            <div class="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-0.5">AHT

                            </div>

                            <div class="font-black text-lg text-amber-900">

                                12:04
                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </div>

    </section>



    

    <section class="mb-8">

        <div class="grid md:grid-cols-2 gap-4">



            

            <a target="_blank" href="https://docs.google.com/spreadsheets/d/18e1E9tZMFrmQ6OZ2x7Vo5nsRdM4BrNPHyJI-Lfe0fQ8/edit"

                class="bg-slate-50 rounded-xl p-4 card-shadow flex items-center justify-between hover:bg-slate-100 transition-colors border border-slate-200 group">

                <div class="flex items-center gap-3">

                    <div class="bg-slate-200 p-2 rounded-lg text-xl">🎰</div>

                    <div>

                        <h3 class="font-bold text-gray-800 group-hover:text-slate-600 transition-colors">Spinbetter

                            Таблица</h3>

                        <p class="text-xs text-gray-500">Google Sheets</p>

                    </div>

                </div>

                <svg class="w-5 h-5 text-gray-400 group-hover:text-slate-500" fill="none" stroke="currentColor"

                    viewBox="0 0 24 24">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"

                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>

                </svg>

            </a>



            

            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1jxp-6VpyPfjyPDCNrS9ay_Zm0HDBYcIjZdSn39OdmLU/edit"

                class="bg-slate-50 rounded-xl p-4 card-shadow flex items-center justify-between hover:bg-slate-100 transition-colors border border-slate-200 group">

                <div class="flex items-center gap-3">

                    <div class="bg-slate-200 p-2 rounded-lg text-xl">❄️</div>

                    <div>

                        <h3 class="font-bold text-gray-800 group-hover:text-slate-600 transition-colors">Coldbet Таблица

                        </h3>

                        <p class="text-xs text-gray-500">Google Sheets</p>

                    </div>

                </div>

                <svg class="w-5 h-5 text-gray-400 group-hover:text-slate-500" fill="none" stroke="currentColor"

                    viewBox="0 0 24 24">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"

                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>

                </svg>

            </a>



        </div>

    </section>



    

    <section class="mb-8">

        <div class="flex items-center justify-between mb-4">

            <div class="flex items-center gap-2">

                <h2 class="text-2xl font-bold text-gray-800">📈 Итоги недели

                    5
                </h2>

                
                <span class="bg-slate-300 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">

                    26.01 –

                    01.02
                </span>

                
            </div>

        </div>



        

        <div class="grid md:grid-cols-2 gap-4 mb-6">



            

            <button id="overview-btn-spinbetter" onclick="selectOverviewProject('spinbetter')"

                class="text-left rounded-xl p-5 card-shadow proj-active relative overflow-hidden transition-all group bg-slate-200 border border-slate-300">

                <div class="flex items-center justify-between z-10 relative">

                    <div class="flex items-center gap-4">

                        <div

                            class="w-14 h-14 bg-slate-300 text-slate-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm">

                            🎰</div>

                        <div>

                            <div class="font-bold text-gray-800 text-xl group-hover:text-slate-600 transition-colors">

                                Spinbetter</div>

                            <div class="text-gray-500 text-sm font-medium">Неделя

                                5
                            </div>

                        </div>

                    </div>

                    

                    <div class="bg-amber-100 border border-amber-300 px-4 py-2 rounded-xl text-center shadow-sm">

                        <div class="text-[10px] text-amber-700 font-bold uppercase tracking-wider mb-1">Всего чатов (ВЧ)

                        </div>

                        <div class="flex items-baseline justify-center gap-2">

                            <div class="text-2xl font-black text-amber-800 tracking-tighter">

                                9 802
                            </div>

                            <div class="text-xs font-bold text-amber-600/70">

                                -344
                            </div>

                        </div>

                    </div>

                </div>

            </button>



            

            <button id="overview-btn-coldbet" onclick="selectOverviewProject('coldbet')"

                class="text-left rounded-xl p-5 card-shadow proj-inactive relative overflow-hidden transition-all group bg-slate-200 border border-slate-300">

                <div class="flex items-center justify-between z-10 relative">

                    <div class="flex items-center gap-4">

                        <div

                            class="w-14 h-14 bg-slate-300 text-slate-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm">

                            ❄️</div>

                        <div>

                            <div class="font-bold text-gray-800 text-xl group-hover:text-slate-600 transition-colors">

                                Coldbet</div>

                            <div class="text-gray-500 text-sm font-medium">Неделя

                                5
                            </div>

                        </div>

                    </div>

                    

                    <div class="bg-emerald-100 border border-emerald-300 px-4 py-2 rounded-xl text-center shadow-sm">

                        <div class="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mb-1">Всего чатов

                            (ВЧ)</div>

                        <div class="flex items-baseline justify-center gap-2">

                            <div class="text-2xl font-black text-emerald-800 tracking-tighter">

                                6 556
                            </div>

                            <div class="text-xs font-bold text-emerald-600/70">

                                &#43;638
                            </div>

                        </div>

                    </div>

                </div>

            </button>



        </div>



        

        <div id="kpiGrid" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

            

        </div>



        

        



<section class="mb-8">

    <div class="bg-slate-50 rounded-2xl p-6 card-shadow border border-slate-200">

        

        

        <div class="flex items-center justify-between mb-6 flex-wrap gap-4">

            <div class="flex items-center gap-3">

                <span class="text-3xl" id="chartProjectIcon">🎰</span>

                <div>

                    <h2 class="text-2xl font-bold text-gray-800" id="chartProjectTitle">Spinbetter — Динамика</h2>

                    <p class="text-gray-500 text-sm">Понедельные изменения метрик</p>

                </div>

            </div>

        </div>



        

        <div class="flex flex-wrap gap-2 mb-6 items-center">

            

            <button onclick="toggleMetric('vch')" id="metric-btn-vch" 

                class="metric-btn-active px-4 py-2 rounded-lg font-medium text-sm transition-all">

                📊 ВЧ

            </button>

            

            <button onclick="toggleMetric('kch')" id="metric-btn-kch" 

                class="metric-btn-active px-4 py-2 rounded-lg font-medium text-sm transition-all">

                📈 КЧ

            </button>

            

            <button onclick="toggleMetric('brr')" id="metric-btn-brr" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                🎯 BRR

            </button>

            

            <button onclick="toggleMetric('csat')" id="metric-btn-csat" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                ⭐ CSAT

            </button>

            

            <button onclick="toggleMetric('csatVotes')" id="metric-btn-csatVotes" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                🗳️ Оценки

            </button>

            

            <button onclick="toggleMetric('mcr')" id="metric-btn-mcr" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                🚨 MCR

            </button>

            

            <button onclick="toggleMetric('frt')" id="metric-btn-frt" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                ⏱️ FRT

            </button>

            

            <button onclick="toggleMetric('art')" id="metric-btn-art" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                ⏳ ART

            </button>

            

            <button onclick="toggleMetric('aht')" id="metric-btn-aht" 

                class="metric-btn-inactive px-4 py-2 rounded-lg font-medium text-sm transition-all">

                🕐 AHT

            </button>



            

            <div class="w-px h-8 bg-slate-400 mx-2"></div>



            

            <button onclick="resetMetrics()" 

                class="metric-btn-reset px-4 py-2 rounded-lg font-medium text-sm transition-all">

                ✕ Сбросить

            </button>

            

        </div>



        

        <div class="bg-white rounded-xl p-4 border border-slate-200" style="height: 450px;">

            <canvas id="mainChart"></canvas>

        </div>



        

        <div class="mt-4 flex flex-wrap gap-4 justify-center text-sm" id="chartLegend">

            

        </div>

        

    </div>

</section>






    </section>

</div>
        

        

        



<div id="content-spinbetter" class="hidden">



    

    <div class="flex gap-2 mb-6">

        <button onclick="showSubTab('spin', 'results')" id="spin-subtab-results"

            class="subtab-active px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm">

            📈 Общие результаты

        </button>

        <button onclick="showSubTab('spin', 'critical')" id="spin-subtab-critical"

            class="subtab-inactive px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm">

            ⚠️ Критический анализ

        </button>

    </div>



    

    <div id="spin-content-results">



        <div class="mb-6 flex items-center justify-between flex-wrap gap-4">

            <h2 class="text-2xl font-bold text-gray-800">🎰 Spinbetter — Результаты по локалям</h2>

            <div class="flex items-center gap-2">

                <span class="text-sm text-slate-600 bg-slate-200 px-3 py-1 rounded-full">

                    13 локалей

                </span>

                
                <span class="text-sm text-slate-600 bg-slate-200 px-3 py-1 rounded-full">

                    26.01 –

                    01.02
                </span>

                
            </div>

        </div>



        

        <div class="flex flex-wrap gap-4 mb-6 p-4 bg-slate-200 rounded-xl">

            <div class="flex items-center gap-2 text-sm">

                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>

                <span class="text-slate-700">Отлично</span>

            </div>

            <div class="flex items-center gap-2 text-sm">

                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"></div>

                <span class="text-slate-700">Внимание</span>

            </div>

            <div class="flex items-center gap-2 text-sm">

                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-red-400 to-red-500"></div>

                <span class="text-slate-700">Требует анализа</span>

            </div>

        </div>



        

        <div class="flex flex-wrap gap-6 mb-8">

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">EN</div>
          <div>
            <div class="font-bold text-lg">English</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">1 387</div>
          <div class="text-white/80 text-sm">+17 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-amber-600">38.1% <span class="text-xs opacity-90">+1.2%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-amber-400 to-amber-500" style="width: 38.1%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:05 <span class="text-xs opacity-90">-00:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 8.333333333333332%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-red-600">2:11 <span class="text-xs opacity-90">-00:03</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 43.666666666666664%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">9:49 <span class="text-xs opacity-90">-00:22</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 65.44444444444444%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">43.4% <span class="text-xs opacity-90">-6.6%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 43.4%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">53 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">RU</div>
          <div>
            <div class="font-bold text-lg">Русский</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">691</div>
          <div class="text-white/80 text-sm">-50 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-amber-600">38.3% <span class="text-xs opacity-90">+1.8%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-amber-400 to-amber-500" style="width: 38.3%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:01 <span class="text-xs opacity-90">-00:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 1.6666666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">0:44 <span class="text-xs opacity-90">-01:17</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 14.666666666666666%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">15:21 <span class="text-xs opacity-90">-00:17</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 100%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">-60.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">1 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">AR</div>
          <div>
            <div class="font-bold text-lg">العربية</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">1 162</div>
          <div class="text-white/80 text-sm">+34 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-red-600">30.7% <span class="text-xs opacity-90">-3.9%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 30.7%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:01 <span class="text-xs opacity-90">-00:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 1.6666666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-red-600">2:10 <span class="text-xs opacity-90">-00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 43.333333333333336%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">7:22 <span class="text-xs opacity-90">-00:11</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 49.111111111111114%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">UZ</div>
          <div>
            <div class="font-bold text-lg">O'zbek</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">795</div>
          <div class="text-white/80 text-sm">-98 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-red-600">18.4% <span class="text-xs opacity-90">+1.2%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 18.4%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:04 <span class="text-xs opacity-90">-00:02</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 6.666666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:17 <span class="text-xs opacity-90">-01:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 25.666666666666664%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">8:35 <span class="text-xs opacity-90">-00:14</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 57.22222222222222%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">DE</div>
          <div>
            <div class="font-bold text-lg">Deutsch</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">288</div>
          <div class="text-white/80 text-sm">-9 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-red-600">29.6% <span class="text-xs opacity-90">+1.5%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 29.6%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:08 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 13.333333333333334%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">0:53 <span class="text-xs opacity-90">-00:12</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 17.666666666666668%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">9:06 <span class="text-xs opacity-90">+00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 60.66666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">50% <span class="text-xs opacity-90">-50.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 50%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">2 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">PL</div>
          <div>
            <div class="font-bold text-lg">Polski</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">546</div>
          <div class="text-white/80 text-sm">+56 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-amber-600">39.4% <span class="text-xs opacity-90">-5.7%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-amber-400 to-amber-500" style="width: 39.4%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-red-600">0:17 <span class="text-xs opacity-90">-00:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 28.333333333333332%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">0:57 <span class="text-xs opacity-90">-01:35</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 19%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">11:48 <span class="text-xs opacity-90">-00:29</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 78.66666666666666%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">PT</div>
          <div>
            <div class="font-bold text-lg">Português</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">352</div>
          <div class="text-white/80 text-sm">+15 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-red-600">21.1% <span class="text-xs opacity-90">-5.2%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 21.1%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:04 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 6.666666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:08 <span class="text-xs opacity-90">-00:43</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 22.666666666666664%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">11:11 <span class="text-xs opacity-90">-01:34</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 74.55555555555556%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">HI</div>
          <div>
            <div class="font-bold text-lg">हिन्दी</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">417</div>
          <div class="text-white/80 text-sm">-8 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-amber-600">22.3% <span class="text-xs opacity-90">-0.7%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-amber-400 to-amber-500" style="width: 22.3%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-red-600">0:18 <span class="text-xs opacity-90">+00:11</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 30%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-red-600">2:25 <span class="text-xs opacity-90">+01:21</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 48.333333333333336%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">9:38 <span class="text-xs opacity-90">-00:26</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 64.22222222222223%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-bad text-xs px-2 py-1 rounded-full font-medium">MCR 0.3%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">TR</div>
          <div>
            <div class="font-bold text-lg">Türkçe</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">50</div>
          <div class="text-white/80 text-sm">+11 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">37.5% <span class="text-xs opacity-90">+4.7%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 37.5%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:02 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 3.3333333333333335%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:06 <span class="text-xs opacity-90">+00:21</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 22%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">10:41 <span class="text-xs opacity-90">-00:34</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 71.22222222222221%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">-100.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">BN</div>
          <div>
            <div class="font-bold text-lg">বাংলা</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">96</div>
          <div class="text-white/80 text-sm">-17 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">35.6% <span class="text-xs opacity-90">+9.5%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 35.6%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:03 <span class="text-xs opacity-90">+00:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 5%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:46 <span class="text-xs opacity-90">-01:14</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 35.333333333333336%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">21:22 <span class="text-xs opacity-90">+00:15</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 100%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">HU</div>
          <div>
            <div class="font-bold text-lg">Magyar</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">272</div>
          <div class="text-white/80 text-sm">-127 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-amber-600">31.5% <span class="text-xs opacity-90">+1.6%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-amber-400 to-amber-500" style="width: 31.5%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:08 <span class="text-xs opacity-90">+00:02</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 13.333333333333334%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:27 <span class="text-xs opacity-90">-00:36</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 28.999999999999996%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">8:40 <span class="text-xs opacity-90">-00:58</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 57.77777777777777%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">CS</div>
          <div>
            <div class="font-bold text-lg">Čeština</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">140</div>
          <div class="text-white/80 text-sm">-35 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">46.2% <span class="text-xs opacity-90">+3.2%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 46.2%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:09 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 15%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">0:50 <span class="text-xs opacity-90">+00:02</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 16.666666666666664%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">12:04 <span class="text-xs opacity-90">-00:45</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 80.44444444444444%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">-100.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-amber-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">BG</div>
          <div>
            <div class="font-bold text-lg">Български</div>
            <div class="text-white/80 text-sm">⚠️ Внимание</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">85</div>
          <div class="text-white/80 text-sm">+10 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">25.4% <span class="text-xs opacity-90">-5.2%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 25.4%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:14 <span class="text-xs opacity-90">-00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 23.333333333333332%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:04 <span class="text-xs opacity-90">+00:12</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 21.333333333333336%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">11:32 <span class="text-xs opacity-90">-00:05</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 76.88888888888889%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-emerald-600">72.7% <span class="text-xs opacity-90">+11.2%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 72.7%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">11 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
        </div>



    </div>



    

    <div id="spin-content-critical" class="hidden">

        
    <div class="mb-10 bg-white rounded-2xl p-6 card-shadow">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">EN</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">ART</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Вторник</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">02:11</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Среднее время ответа выше плана (02:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">RU</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">15:21</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (15:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">AR</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">ART</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Пятница</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">02:10</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (02:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">PL</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">FRT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Четверг</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">00:17</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (00:15)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">PT</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">11:11</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (10:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class="md:col-span-2 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">HI</div>
          </div>
          
          
          <div class="p-4">
            <div class="flex flex-wrap gap-4">
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">ART</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Четверг</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">02:25</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Существенное превышение плана</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">FRT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Четверг</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">00:18</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Замедление первого ответа</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">MCR</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Вторник</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">0.3%</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Ухудшение показателя</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">TR</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Пятница</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">10:41</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (10:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">BN</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Пятница</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">21:22</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (21:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">CS</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Вторник</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">12:04</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (11:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">BG</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">11:32</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">План не выполнен (11:00)</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      </div></div>
    </div>



</div>
        

        

        



<div id="content-coldbet" class="hidden">



    

    <div class="flex gap-2 mb-6">

        <button onclick="showSubTab('cold', 'results')" id="cold-subtab-results"

            class="subtab-active px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm">

            📈 Общие результаты

        </button>

        <button onclick="showSubTab('cold', 'critical')" id="cold-subtab-critical"

            class="subtab-inactive px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm">

            ⚠️ Критический анализ

        </button>

    </div>



    

    <div id="cold-content-results">



        <div class="mb-6 flex items-center justify-between flex-wrap gap-4">

            <h2 class="text-2xl font-bold text-gray-800">❄️ Coldbet — Результаты по локалям</h2>

            <div class="flex items-center gap-2">

                <span class="text-sm text-slate-600 bg-slate-200 px-3 py-1 rounded-full">

                    6 локалей

                </span>

                
                <span class="text-sm text-slate-600 bg-slate-200 px-3 py-1 rounded-full">

                    26.01 –

                    01.02
                </span>

                
            </div>

        </div>



        

        <div class="flex flex-wrap gap-4 mb-6 p-4 bg-slate-200 rounded-xl">

            <div class="flex items-center gap-2 text-sm">

                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>

                <span class="text-slate-700">Отлично</span>

            </div>

            <div class="flex items-center gap-2 text-sm">

                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"></div>

                <span class="text-slate-700">Внимание</span>

            </div>

            <div class="flex items-center gap-2 text-sm">

                <div class="w-4 h-4 rounded-full bg-gradient-to-r from-red-400 to-red-500"></div>

                <span class="text-slate-700">Требует анализа</span>

            </div>

        </div>



        

        <div class="flex flex-wrap gap-6 mb-8">

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">UZ</div>
          <div>
            <div class="font-bold text-lg">O'zbek</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">1 659</div>
          <div class="text-white/80 text-sm">-22 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">26.3% <span class="text-xs opacity-90">+2.7%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 26.3%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-red-600">0:17 <span class="text-xs opacity-90">-00:03</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 28.333333333333332%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-red-600">3:18 <span class="text-xs opacity-90">-01:27</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 66%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">18:30 <span class="text-xs opacity-90">+00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 100%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-bad text-xs px-2 py-1 rounded-full font-medium">MCR 0.1%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">AR</div>
          <div>
            <div class="font-bold text-lg">العربية</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">2 222</div>
          <div class="text-white/80 text-sm">+448 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-red-600">22.6% <span class="text-xs opacity-90">-2.3%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 22.6%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:01 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 1.6666666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">0:41 <span class="text-xs opacity-90">+00:04</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 13.666666666666666%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-emerald-600">6:55 <span class="text-xs opacity-90">-00:15</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 46.111111111111114%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">RU</div>
          <div>
            <div class="font-bold text-lg">Русский</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">229</div>
          <div class="text-white/80 text-sm">+19 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">42.8% <span class="text-xs opacity-90">+0.7%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 42.8%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:03 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 5%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">0:57 <span class="text-xs opacity-90">-00:06</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 19%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">14:43 <span class="text-xs opacity-90">-00:20</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 98.11111111111111%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">EN</div>
          <div>
            <div class="font-bold text-lg">English</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">224</div>
          <div class="text-white/80 text-sm">-11 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">30.7% <span class="text-xs opacity-90">+2.1%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 30.7%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:08 <span class="text-xs opacity-90">+00:02</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 13.333333333333334%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-red-600">4:04 <span class="text-xs opacity-90">+00:41</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 81.33333333333333%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">12:15 <span class="text-xs opacity-90">-00:40</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 81.66666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">-100.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">1 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">FR</div>
          <div>
            <div class="font-bold text-lg">Français</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">118</div>
          <div class="text-white/80 text-sm">+44 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-emerald-600">60.9% <span class="text-xs opacity-90">-2.8%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 60.9%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-emerald-600">0:04 <span class="text-xs opacity-90">00:00</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 6.666666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-red-600">4:26 <span class="text-xs opacity-90">-00:14</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 88.66666666666667%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">17:50 <span class="text-xs opacity-90">+00:03</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 100%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
            
            <div class="flex-grow basis-[350px]">

                
    <div class="locale-card border-2 border-red-300 card-shadow">
      <div class="locale-card-header bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">PL</div>
          <div>
            <div class="font-bold text-lg">Polski</div>
            <div class="text-white/80 text-sm">🚨 Требует анализа</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black">278</div>
          <div class="text-white/80 text-sm">-20 КЧ</div>
        </div>
      </div>
      <div class="locale-card-body">
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🎯 BRR</span>
        <span class="font-bold text-red-600">27.8% <span class="text-xs opacity-90">-1.6%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 27.8%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏱️ FRT</span>
        <span class="font-bold text-red-600">0:16 <span class="text-xs opacity-90">+00:01</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 26.666666666666668%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⏳ ART</span>
        <span class="font-bold text-emerald-600">1:05 <span class="text-xs opacity-90">-00:04</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-emerald-400 to-emerald-500" style="width: 21.666666666666668%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">🕐 AHT</span>
        <span class="font-bold text-red-600">11:07 <span class="text-xs opacity-90">-01:54</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 74.11111111111111%"></div>
      </div>
    </div>
  
        
    <div class="py-3 border-b border-slate-200">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm font-semibold text-slate-600">⭐ CSAT</span>
        <span class="font-bold text-red-600">0% <span class="text-xs opacity-90">+0.0%</span></span>
      </div>
      <div class="metric-bar">
        <div class="metric-bar-fill bg-gradient-to-r from-red-400 to-red-500" style="width: 0%"></div>
      </div>
    </div>
  
        
        <div class="flex gap-2 mt-4 flex-wrap">
          <span class="status-warning text-xs px-2 py-1 rounded-full font-medium">MCR 0%</span>
          <span class="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">0 оценок</span>
        </div>
      </div>
    </div>
  
            </div>

            
        </div>



    </div>



    

    <div id="cold-content-critical" class="hidden">

        
    <div class="mb-10 bg-white rounded-2xl p-6 card-shadow">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    
        <div class="md:col-span-2 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">EN</div>
          </div>
          
          
          <div class="p-4">
            <div class="flex flex-wrap gap-4">
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">ART</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Вторник</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">04:04</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Время первого ответа превышает план</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Вторник</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">12:15</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Показатель выше допустимого уровня</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class="md:col-span-2 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">UZ</div>
          </div>
          
          
          <div class="p-4">
            <div class="flex flex-wrap gap-4">
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">18:30</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Высокое время обработки диалогов</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">FRT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">00:17</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Замедление первого ответа</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">PL</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">FRT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Четверг</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">00:16</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Плановое значение не выполнено</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class="md:col-span-2 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">FR</div>
          </div>
          
          
          <div class="p-4">
            <div class="flex flex-wrap gap-4">
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">ART</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">04:26</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Высокое время первого ответа</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              
                
                <div class="flex-1 min-w-[200px] bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Среда</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">17:50</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Значительное превышение нормы</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      
        <div class=" bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
            <div class="text-3xl font-black text-white tracking-wider">RU</div>
          </div>
          
          
          <div class="p-4">
            <div class="">
              
                
                <div class="w-full bg-white/70 rounded-xl p-4 border border-yellow-200/50">
                  
                  <div class="flex items-center justify-between mb-3">
                    <span class="inline-block px-2.5 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm">AHT</span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-sm font-black uppercase tracking-wide rounded-lg shadow-md border border-yellow-500/30">
                      <span>📅</span>
                      <span>Пятница</span>
                    </span>
                  </div>
                  
                  
                  <div class="flex items-start gap-3 mb-3">
                    <div class="flex-1">
                      <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Показатель</div>
                      <div class="text-xl font-black text-yellow-700">14:43</div>
                    </div>
                    
                  </div>
                  
                  
                  <div class="p-2.5 rounded-lg bg-white/90 border border-gray-200 mb-2">
                    <div class="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Проблема</div>
                    <div class="text-xs text-gray-600 leading-relaxed whitespace-pre-line break-words">Показатель выше плана</div>
                  </div>

                  
                  
                  <div class="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg shadow-sm border border-red-600/20">
                    <span class="text-white text-xs flex-shrink-0">⚠</span>
                    <span class="text-white text-[10px] font-black uppercase tracking-wider">🔊 Требуется анализ</span>
                  </div>
                  
                </div>
              

            </div>
          </div>
        </div>
      </div></div>
    </div>



</div>
        

        

        



<style>

     

    .plans-section-card {

        border: 2px solid #1e293b;

        border-radius: 1.5rem;

        background: white;

    }



    .plans-header-gradient {

        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);

        border-radius: 1rem;

        padding: 1.25rem 1.5rem;

        box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);

    }



     

    .day-filter-panel {

        border: 2px solid #1e293b;

        border-radius: 1.5rem;

        background: white;

        padding: 0.75rem;

    }



    .day-filter-btn {

        padding: 0.625rem 1.5rem;

        border-radius: 0.75rem;

        border: 2px solid #c5c5c5;

        transition: all 0.2s ease;

        font-weight: 600;

        background: #f8fafc;

        color: #64748b;

    }



    .day-filter-btn:hover {

        border-color: rgba(251, 191, 36, 0.8);

        background: rgba(251, 191, 36, 0.15);

        color: #d97706;

    }



    .day-filter-btn-active {

        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);

        color: white;

        border-color: #d97706;

        box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);

    }

</style>



<div id="content-plans" class="hidden">



    

    <div class="mb-8">

        <div class="plans-header-gradient flex items-center justify-between flex-wrap gap-4">

            <div class="flex items-center gap-3">

                <span class="p-2 bg-white/20 rounded-xl text-2xl">📋</span>

                <h2 class="text-2xl font-black text-white tracking-tight">

                    Планы на неделю

                </h2>

            </div>

            <div class="flex items-center gap-3">

                <span class="px-3 py-1.5 bg-white/20 text-white rounded-lg text-sm font-bold">

                    
                    02.02
                    —

                    08.02
                    
                </span>

                <span

                    class="px-3 py-1.5 bg-white text-amber-700 rounded-lg text-sm font-black uppercase tracking-wider">

                    Неделя

                    1
                </span>

            </div>

        </div>

    </div>





    

    <div class="flex flex-wrap gap-2 mb-8 p-3 glass-panel rounded-3xl">

        <button onclick="showPlanDay('all')" id="plan-day-all"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-active">

            📅 Все дни

        </button>

        
        <button onclick="showPlanDay('monday')" id="plan-day-monday"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-inactive">

            Пн
        </button>

        
        <button onclick="showPlanDay('tuesday')" id="plan-day-tuesday"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-inactive">

            Вт
        </button>

        
        <button onclick="showPlanDay('wednesday')" id="plan-day-wednesday"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-inactive">

            Ср
        </button>

        
        <button onclick="showPlanDay('thursday')" id="plan-day-thursday"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-inactive">

            Чт
        </button>

        
        <button onclick="showPlanDay('friday')" id="plan-day-friday"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-inactive">

            Пт
        </button>

        
        <button onclick="showPlanDay('perspective')" id="plan-day-perspective"

            class="px-6 py-2.5 rounded-xl transition-all day-btn-inactive">

            🔮
        </button>

        
    </div>



    

    <div id="plan-section" class="space-y-12 animate-fadeIn pb-20">

        


        

        
        <div id="priorities-section"

            class="plans-section-card p-8 border-2 border-yellow-400/30 shadow-2xl rounded-[3rem] bg-gradient-to-br from-white to-yellow-50/30 relative overflow-hidden">

            <div class="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>



            <h3 onclick="toggleSection('priorities-section')"

                class="text-3xl font-black text-slate-800 mb-10 flex items-center gap-4 relative z-10 cursor-pointer hover:opacity-80 transition-opacity select-none">

                <span

                    class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-2xl shadow-lg shadow-yellow-200 animate-pulse">🔥</span>

                <span class="tracking-tight">Приоритеты</span>

                <div class="h-1 bg-gradient-to-r from-yellow-400 to-transparent flex-1 rounded-full opacity-30 ml-4">

                </div>

                <span id="priorities-section-icon"

                    class="text-2xl text-slate-400 transition-transform duration-300">▼</span>

            </h3>



            <div id="priorities-section-content" class="flex flex-wrap gap-8 relative z-10 transition-all duration-300">

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="perspective"

                    data-is-priority="true">

                    
    <div class="bg-yellow-50/60 backdrop-blur-xl border-2 border-yellow-400/50 rounded-2xl p-5 shadow-lg shadow-yellow-200/50 transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">ПРИОРИТЕТ 1</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Перспектива</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">🔥СНИЖЕНИЕ ОБЪЕМА ОБРАЩЕНИЙ</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">Цель: Уменьшить общее количество чатов в саппорт

Декабрь 2025 (итого):
• Spinbetter: 30 939
• Coldbet: 12 823

📊 Январь 2025
• Spinbetter: 23 279
Неделя 4: 6 644

• Coldbet: 18 063
Неделя 3: 4 754</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="monday"

                    data-is-priority="true">

                    
    <div class="bg-yellow-50/40 backdrop-blur-lg border-2 border-yellow-300/50 rounded-2xl p-5 shadow-lg shadow-yellow-100/50 transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">ПРИОРИТЕТ 2</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Понедельник</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">📊СБОР И АНАЛИЗ СТАТИСТИКИ ЗА НЕДЕЛЮ</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">Цель: Провести полный анализ данных Spinbetter и Coldbet за прошедшую неделю для формирования новых задач</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
            </div>

        </div>

        


        

        
        <div id="blocks-only-section"

            class="plans-section-card p-8 border-2 border-blue-400/20 shadow-xl rounded-[3rem] bg-white/60 backdrop-blur-md">

            <h3 onclick="toggleSection('blocks-only-section')"

                class="text-3xl font-black text-slate-800 mb-10 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity select-none">

                <span

                    class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg shadow-blue-200">📦</span>

                <span class="tracking-tight">Блоки</span>

                <div class="h-1 bg-gradient-to-r from-blue-400 to-transparent flex-1 rounded-full opacity-20 ml-4">

                </div>

                <span id="blocks-only-section-icon"

                    class="text-2xl text-slate-400 transition-transform duration-300">▼</span>

            </h3>



            <div id="blocks-only-section-content" class="flex flex-wrap gap-8 transition-all duration-300">

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]"

                    data-day="monday">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 1</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Понедельник</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words"></div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">• Собрать статистику за неделю 26.01 – 01.02
• Проанализировать динамику по локалям
• Выявить новые тенденции
• Сформировать отчет с выводами</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]"

                    data-day="tuesday">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 2</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Вторник</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">💡 Расширение мониторинга</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">Наблюдение + стата 💡
• Испанский язык — мониторинг обращений
• Французский язык — мониторинг обращений</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]"

                    data-day="wednesday">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 3</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Среда</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">Работа с кейсами</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">• Пересмотреть кейсы в Reddy за прошлую неделю и тегнуть Лео/Роман</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[600px] max-w-[850px]"

                    data-day="perspective">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 4</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Перспектива</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">🤖 Адаптация бота на Coldbet</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">&quot;На Coldbet сейчас работает старый формат бота, поэтому для адаптации потребуется провести полное обновление до новой системы&quot;

Статус адаптации базы знаний ColdBet

• Пересмотр всех запросов — ✅ Выполнено
• Удаление неактуальных/универсальных сценариев — ✅ Выполнено
• Адаптация под структуру разделов ColdBet — ✅ Выполнено
• Проверка соответствия пользовательским сценариям — ✅ Выполнено
•  Финальная вычитка → Передали Александру на утверждение ✅ Выполнено

Следующий шаг:
⏳ Ожидаем апрува от Александра
⏳ Передача на платформу

Таблица для редактирования: <a href="https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525" target="_blank" class="text-blue-600 underline hover:text-blue-800 font-bold transition-colors">https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525</a></div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]"

                    data-day="monday">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 5</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Понедельник</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">Создать шаблоны нового месяця - Февраль, на двух преоктах + локали</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">Spinbetter/Coldbet
• Main
• February
• Locales</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]"

                    data-day="wednesday">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 6</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Среда</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">Push: CSAT </div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">📊 CSAT — Массовое отсутствие
• Spinbetter: Локали без оценок
• Coldbet: Локали без оценок
• Проверить кол-во оставленных оценок
• Пушнуть ответственных
<a href="https://lnk.reddy.team/message/1974522/440" target="_blank" class="text-blue-600 underline hover:text-blue-800 font-bold transition-colors">Reddy link</a></div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]"

                    data-day="monday">

                    
    <div class="bg-white/80 backdrop-blur-md border-2 border-slate-100/50 rounded-2xl p-5 shadow-sm  transition-all hover:shadow-xl relative overflow-hidden">
      
      

      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-wider shadow-md">БЛОК 7</span>
          <span class="text-[10px] font-bold text-slate-300 mx-1">•</span>
          <span class="text-[12px] font-black text-slate-600 uppercase px-2 py-1 bg-yellow-400/20 rounded-md border border-yellow-400/30">Понедельник</span>
          
          
        </div>
        
        
      </div>

      <div class="flex items-start gap-3 min-w-0 relative z-10">
        <span class="text-2xl mt-0.5 flex-shrink-0">⏳</span>
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-gray-900 leading-tight break-words">Push: Работа с email-запросами</div>
          <div class="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed break-words">Задача с прошлой недели по разбору email&#039;ов (запрос от Андрея), проверить в Reddy и повторно тегнуть ответственных</div>
          
          <div class="flex flex-wrap gap-2 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  
                </div>

                
            </div>

        </div>

        


        

        
        <div id="spinbetter-section"

            class="plans-section-card p-8 border-2 border-amber-400/20 shadow-xl rounded-[3rem] bg-white/60 backdrop-blur-md">

            <h3 onclick="toggleSection('spinbetter-section')"

                class="plan-project-header text-3xl font-black text-slate-800 mb-10 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity select-none"

                data-project="spinbetter">

                <span

                    class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-lime-500 to-emerald-600 text-white rounded-2xl shadow-lg shadow-lime-200">🎰</span>

                <span class="tracking-tight uppercase">Spinbetter</span>

                <div class="h-1 bg-gradient-to-r from-amber-400 to-transparent flex-1 rounded-full opacity-20 ml-4">

                </div>

                <span id="spinbetter-section-icon"

                    class="text-2xl text-slate-400 transition-transform duration-300">▼</span>

            </h3>



            <div id="spinbetter-section-content" class="flex flex-wrap gap-8 transition-all duration-300">

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="tuesday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 1
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ВТОРНИК</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">EN</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">ART</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">02:11</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:03</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Среднее время ответа выше плана (02:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 2
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">RU</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">15:21</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:17</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (15:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="friday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 3
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ПЯТНИЦА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">AR</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">ART</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">02:10</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:01</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (02:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="thursday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 4
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ЧЕТВЕРГ</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">PL</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">FRT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">00:17</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:01</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (00:15)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 5
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">PT</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">11:11</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−01:34</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (10:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="thursday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 6
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ЧЕТВЕРГ</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">HI</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">ART</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">02:25</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+01:21</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Существенное превышение плана</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="thursday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 7
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ЧЕТВЕРГ</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">HI</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">FRT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">00:18</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+00:11</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Замедление первого ответа</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="tuesday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 8
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ВТОРНИК</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">HI</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">MCR</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">0.3%</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-green-600">+0.3%</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Ухудшение показателя</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="friday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 9
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ПЯТНИЦА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">TR</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">10:41</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:34</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (10:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="friday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 10
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ПЯТНИЦА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">BN</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">21:22</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+00:16</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (21:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="tuesday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 11
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">ВТОРНИК</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">CS</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">12:04</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:45</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (11:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="spinbetter">

                    
    <div class="bg-white rounded-[2rem] border-2 border-lime-300 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-lime-200 bg-lime-50/30">
            
            <div class="bg-lime-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 12
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-lime-200">
                <span class="text-sm font-black text-lime-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">BG</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-lime-200 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-lime-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">11:32</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-lime-200 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-gray-500">−00:06</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">План не выполнен (11:00)</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-lime-500 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
            </div>

        </div>

        


        

        
        <div id="coldbet-section"

            class="plans-section-card p-8 border-2 border-emerald-400/20 shadow-xl rounded-[3rem] bg-white/60 backdrop-blur-md">

            <h3 onclick="toggleSection('coldbet-section')"

                class="plan-project-header text-3xl font-black text-slate-800 mb-10 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity select-none"

                data-project="coldbet">

                <span

                    class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-600 text-white rounded-2xl shadow-lg shadow-emerald-200">❄️</span>

                <span class="tracking-tight uppercase">Coldbet</span>

                <div class="h-1 bg-gradient-to-r from-emerald-400 to-transparent flex-1 rounded-full opacity-20 ml-4">

                </div>

                <span id="coldbet-section-icon"

                    class="text-2xl text-slate-400 transition-transform duration-300">▼</span>

            </h3>



            <div id="coldbet-section-content" class="flex flex-wrap gap-8 transition-all duration-300">

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="tuesday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 1
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">ВТОРНИК</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">EN</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">ART</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">04:04</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+00:41</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Время первого ответа превышает план</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="tuesday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 2
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">ВТОРНИК</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">EN</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">12:15</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-green-600">-00:40</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Показатель выше допустимого уровня</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 3
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">UZ</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">18:30</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+00:01</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Высокое время обработки диалогов</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 4
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">UZ</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">FRT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">00:17</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-green-600">-00:03</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Замедление первого ответа</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="thursday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 5
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">ЧЕТВЕРГ</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">PL</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">FRT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">00:16</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+00:01</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Плановое значение не выполнено</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 6
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">FR</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">ART</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">04:26</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-green-600">-00:14</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Высокое время первого ответа</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="wednesday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 7
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">СРЕДА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">FR</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">17:50</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-red-500">+00:04</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Значительное превышение нормы</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
                <div class="plan-item-card transition-all flex-grow basis-[350px] max-w-[600px]" data-day="friday"

                    data-project="coldbet">

                    
    <div class="bg-white rounded-[2rem] border-2 border-cyan-200 shadow-lg overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
        
        
        <div class="flex items-stretch border-b-2 border-cyan-100 bg-cyan-50/30">
            
            <div class="bg-cyan-600 text-white font-black text-sm px-4 py-3 flex items-center justify-center rounded-br-2xl shadow-sm">
                ЗАДАЧА 8
            </div>
            
            
            <div class="flex-1 flex items-center justify-center px-2 py-1 border-r-2 border-cyan-100">
                <span class="text-sm font-black text-cyan-950/70 tracking-widest uppercase">ПЯТНИЦА</span>
            </div>
            
            
            <div class="px-4 py-1 flex items-center justify-center bg-white/50">
                <span class="text-2xl font-black text-slate-800">RU</span>
            </div>
        </div>
        
        
        <div class="p-4 flex-1 flex flex-col gap-4">
            
            
            <div class="flex items-center justify-between p-3 rounded-2xl border-2 border-cyan-100 bg-white shadow-sm">
                
                <div class="flex-1 text-center">
                    <span class="text-3xl font-black text-cyan-700">AHT</span>
                </div>
                
                
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-lg font-bold text-slate-800">14:43</span>
                </div>
                
                 
                <div class="w-0.5 h-10 bg-cyan-100 mx-1"></div>
                
                
                <div class="flex-1 text-center">
                    <span class="text-base font-bold text-green-600">-00:21</span>
                </div>
            </div>
            
            
            <div class="flex-1 flex flex-col gap-3">
                <div class="text-slate-600 font-medium text-sm leading-relaxed mb-4">Показатель выше плана</div>
                
                
                <div class="mt-auto bg-slate-50 border-l-4 border-cyan-400 pl-3 py-2 rounded-r-xl">
                    <div class="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Рекомендация</div>
                    <div class="font-bold text-sm text-slate-700">🔊 Требуется анализ</div>
                </div>
            </div>
            
        </div>
        
        
        <div class="h-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
    </div>
    
                </div>

                
            </div>

        </div>

        


        

        
    </div>

</div>



</div>
        

        

        



<style>

    .workload-container {

        width: 100%;

        max-width: 1200px;

        margin: 0 auto;

        display: flex;

        flex-direction: column;

        gap: 20px;

    }



    .workload-card {

        background: #ffffff;

        border-radius: 16px;

        border: 1px solid #e2e8f0;

        display: flex;

        align-items: stretch;

        min-height: 110px;

        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

        transition: transform 0.2s, box-shadow 0.2s;

        overflow: hidden;

    }



    .workload-card:hover {

        transform: translateY(-3px);

        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);

        border-color: #94a3b8;

    }



    .workload-status-stripe {

        width: 6px;

        flex-shrink: 0;

    }



    .workload-card.is-danger .workload-status-stripe {

        background: #ef4444;

    }



    .workload-card.is-warning .workload-status-stripe {

        background: #f59e0b;

    }



    .workload-card.is-success .workload-status-stripe {

        background: #10b981;

    }



     

    .workload-day-section {

        width: 170px;

        display: flex;

        align-items: center;

        padding-left: 25px;

        border-right: 1px solid #e2e8f0;

        background: #fafbfc;

    }



    .workload-day-title {

        font-size: 20px;

        font-weight: 800;

        letter-spacing: -0.5px;

        font-family: 'Comfortaa', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

    }



    .workload-card.is-danger .workload-day-title {

        color: #ef4444;

    }



    .workload-card.is-warning .workload-day-title {

        color: #f59e0b;

    }



    .workload-card.is-success .workload-day-title {

        color: #10b981;

    }



     

    .workload-progress-section {

        flex-grow: 1;

        display: flex;

        flex-direction: column;

        justify-content: center;

        padding: 0 30px;

        border-right: 1px solid #e2e8f0;

    }



    .workload-segments-track {

        display: flex;

        gap: 4px;

        height: 24px;

        width: 100%;

    }



    .workload-seg {

        flex: 1;

        border-radius: 4px;

        background-color: #f1f5f9;

        border: 1px solid #cbd5e1;

        transition: all 0.3s;

    }



    .workload-seg.filled {

        border: none;

    }



    .workload-card.is-danger .workload-seg.filled {

        background: #3b82f6;

    }



    .workload-card.is-warning .workload-seg.filled {

        background: #f59e0b;

    }



    .workload-card.is-success .workload-seg.filled {

        background: #10b981;

    }



    .workload-seg.overload {

        background: #ef4444;

        border: none;

        position: relative;

    }



    .workload-seg.overload::after {

        content: '!';

        position: absolute;

        color: white;

        font-size: 12px;

        font-weight: bold;

        width: 100%;

        height: 100%;

        display: flex;

        align-items: center;

        justify-content: center;

    }



    .workload-progress-header {

        margin-bottom: 8px;

        font-size: 12px;

        font-weight: 700;

        color: #64748b;

        text-transform: uppercase;

        display: flex;

        justify-content: space-between;

    }



     

    .workload-overload-box-section {

        width: 110px;

        display: flex;

        align-items: center;

        justify-content: center;

        border-right: 1px solid #e2e8f0;

        flex-direction: column;

    }



    .workload-overload-square {

        width: 50px;

        height: 50px;

        border-radius: 10px;

        display: flex;

        align-items: center;

        justify-content: center;

        font-weight: 900;

        font-size: 18px;

        line-height: 1;

        margin-bottom: 5px;

    }



    .workload-box-label {

        font-size: 11px;

        color: #64748b;

        font-weight: 600;

        text-transform: uppercase;

    }



    .workload-sq-danger {

        background: #ef4444;

        color: white;

        box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);

    }



    .workload-sq-success {

        background: #ecfdf5;

        color: #10b981;

        border: 2px solid #10b981;

    }



    .workload-sq-neutral {

        background: #f1f5f9;

        color: #64748b;

        border: 1px solid #cbd5e1;

    }



     

    .workload-total-section {

        width: 120px;

        display: flex;

        flex-direction: column;

        justify-content: center;

        align-items: center;

    }



    .workload-total-count {

        font-size: 28px;

        font-weight: 900;

        color: #1e293b;

        line-height: 1;

        font-family: 'Comfortaa', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

    }



    .workload-total-label {

        font-size: 13px;

        color: #64748b;

        margin-top: 4px;

    }

</style>



<div id="content-workload" class="hidden">



    <div class="mb-6">

        <h2 class="text-2xl font-bold text-gray-800">📈 Нагрузка за неделю</h2>

        <p class="text-gray-500 mt-1">Распределение задач по дням недели</p>

    </div>



    <div class="workload-container">

        
      <div class="workload-card is-warning">
        <div class="workload-status-stripe"></div>
        
        
        <div class="workload-day-section">
          <div class="workload-day-title">Понедельник</div>
        </div>

        
        <div class="workload-progress-section">
          <div class="workload-progress-header">
            <span>Слоты: 4 из 4</span>
          </div>
          <div class="workload-segments-track">
            <div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div>
          </div>
        </div>

        
        <div class="workload-overload-box-section">
          <div class="workload-overload-square workload-sq-neutral">0</div>
          <span class="workload-box-label">Сверх</span>
        </div>

        
        <div class="workload-total-section">
          <span class="workload-total-count">4</span>
          <span class="workload-total-label">всего</span>
        </div>
      </div>
    
      <div class="workload-card is-danger">
        <div class="workload-status-stripe"></div>
        
        
        <div class="workload-day-section">
          <div class="workload-day-title">Вторник</div>
        </div>

        
        <div class="workload-progress-section">
          <div class="workload-progress-header">
            <span>Слоты: 4 + 2</span>
          </div>
          <div class="workload-segments-track">
            <div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg overload"></div>
          </div>
        </div>

        
        <div class="workload-overload-box-section">
          <div class="workload-overload-square workload-sq-danger">+2</div>
          <span class="workload-box-label">Сверх</span>
        </div>

        
        <div class="workload-total-section">
          <span class="workload-total-count">6</span>
          <span class="workload-total-label">всего</span>
        </div>
      </div>
    
      <div class="workload-card is-danger">
        <div class="workload-status-stripe"></div>
        
        
        <div class="workload-day-section">
          <div class="workload-day-title">Среда</div>
        </div>

        
        <div class="workload-progress-section">
          <div class="workload-progress-header">
            <span>Слоты: 4 + 5</span>
          </div>
          <div class="workload-segments-track">
            <div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg overload"></div>
          </div>
        </div>

        
        <div class="workload-overload-box-section">
          <div class="workload-overload-square workload-sq-danger">+5</div>
          <span class="workload-box-label">Сверх</span>
        </div>

        
        <div class="workload-total-section">
          <span class="workload-total-count">9</span>
          <span class="workload-total-label">всего</span>
        </div>
      </div>
    
      <div class="workload-card is-warning">
        <div class="workload-status-stripe"></div>
        
        
        <div class="workload-day-section">
          <div class="workload-day-title">Четверг</div>
        </div>

        
        <div class="workload-progress-section">
          <div class="workload-progress-header">
            <span>Слоты: 4 из 4</span>
          </div>
          <div class="workload-segments-track">
            <div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div>
          </div>
        </div>

        
        <div class="workload-overload-box-section">
          <div class="workload-overload-square workload-sq-neutral">0</div>
          <span class="workload-box-label">Сверх</span>
        </div>

        
        <div class="workload-total-section">
          <span class="workload-total-count">4</span>
          <span class="workload-total-label">всего</span>
        </div>
      </div>
    
      <div class="workload-card is-warning">
        <div class="workload-status-stripe"></div>
        
        
        <div class="workload-day-section">
          <div class="workload-day-title">Пятница</div>
        </div>

        
        <div class="workload-progress-section">
          <div class="workload-progress-header">
            <span>Слоты: 4 из 4</span>
          </div>
          <div class="workload-segments-track">
            <div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg filled"></div>
          </div>
        </div>

        
        <div class="workload-overload-box-section">
          <div class="workload-overload-square workload-sq-neutral">0</div>
          <span class="workload-box-label">Сверх</span>
        </div>

        
        <div class="workload-total-section">
          <span class="workload-total-count">4</span>
          <span class="workload-total-label">всего</span>
        </div>
      </div>
    
      <div class="workload-card is-success">
        <div class="workload-status-stripe"></div>
        
        
        <div class="workload-day-section">
          <div class="workload-day-title">Перспектива</div>
        </div>

        
        <div class="workload-progress-section">
          <div class="workload-progress-header">
            <span>Слоты: 2 из 4</span>
          </div>
          <div class="workload-segments-track">
            <div class="workload-seg filled"></div><div class="workload-seg filled"></div><div class="workload-seg"></div><div class="workload-seg"></div>
          </div>
        </div>

        
        <div class="workload-overload-box-section">
          <div class="workload-overload-square workload-sq-success">✓</div>
          <span class="workload-box-label">Норма</span>
        </div>

        
        <div class="workload-total-section">
          <span class="workload-total-count">2</span>
          <span class="workload-total-label">всего</span>
        </div>
      </div>
    
    </div>



</div>


        

    </main>



    

    <script>

    




    

    

    



    

    const reportData = {"meta":{"generatedAt":"2026-02-06T22:43:34.077Z","version":"1.0.0","weekNumber":5,"currentWeekNumber":"1","month":"Январь","year":2026,"dateRange":{"start":"26.01","end":"01.02"},"nextWeekRange":{"start":"02.02","end":"08.02"},"monthNumber":"01"},"projects":{"spinbetter":{"config":{"id":"spinbetter","name":"Spinbetter","icon":"🎰","color":"#f59e0b","colorLight":"#fef3c7","colorDark":"#b45309","gradient":"from-amber-500 to-amber-600","spreadsheetUrl":"https://docs.google.com/spreadsheets/d/18e1E9tZMFrmQ6OZ2x7Vo5nsRdM4BrNPHyJI-Lfe0fQ8/edit","externalSpreadsheetId":{"test":"18e1E9tZMFrmQ6OZ2x7Vo5nsRdM4BrNPHyJI-Lfe0fQ8"},"externalSpreadsheetMode":"test","useExternalLocales":true,"localesSheetStructure":"per-locale"},"monthly":{"vch":45269,"kch":28775,"brr":36.4,"csat":59.5,"csatVotes":348,"mcr":0,"frt":6,"art":98,"aht":621},"weekly":{"current":{"vch":9802,"kch":6452,"brr":34.2,"csat":47.8,"csatVotes":67,"mcr":0,"frt":6,"art":96,"aht":614},"previous":{"vch":0,"kch":0,"brr":0,"csat":0,"csatVotes":0,"mcr":0,"frt":0,"art":0,"aht":0},"diff":{"vch":{"value":-344,"formatted":"-344"},"kch":{"value":-192,"formatted":"-192"},"brr":{"value":-0.3,"formatted":"-0,3%"},"csat":{"value":-7,"formatted":"-7,0%"},"csatVotes":{"value":-6,"formatted":"-6"},"mcr":{"value":0,"formatted":"+0,0%"},"frt":{"value":0,"formatted":"+0:00"},"art":{"value":-25,"formatted":"-0:25"},"aht":{"value":-23,"formatted":"-0:23"}},"customDiff":{"vch":{"value":-344,"formatted":"-344"},"kch":{"value":-192,"formatted":"-192"},"brr":{"value":-0.3,"formatted":"-0,3%"},"csat":{"value":-7,"formatted":"-7,0%"},"csatVotes":{"value":-6,"formatted":"-6"},"mcr":{"value":0,"formatted":"+0,0%"},"frt":{"value":0,"formatted":"+0:00"},"art":{"value":-25,"formatted":"-0:25"},"aht":{"value":-23,"formatted":"-0:23"}}},"history":{"labels":["Янв. Н-1","Янв. Н-2","Янв. Н-3","Янв. Н-4","Янв. Н-5"],"data":{"vch":[12752,9629,9642,10146,9802],"kch":[7793,6022,6008,6644,6452],"brr":[38.9,37.5,37.7,34.5,34.2],"csat":[74.4,58.9,65.2,54.8,47.8],"csatVotes":[121,73,69,73,67],"mcr":[0,0,0,0,0],"frt":[6,6,6,6,6],"art":[84,89,91,121,96],"aht":[619,596,629,637,614]}},"locales":[{"code":"EN","name":"English","flag":"🇬🇧","metrics":{"kch":{"value":1387,"diff":17,"formatted":"1 387","diffFormatted":"+17"},"brr":{"value":38.1,"diff":1.2,"formatted":"38.1%","diffFormatted":"+1.2%"},"csat":{"value":43.4,"diff":-6.6,"formatted":"43.4%","diffFormatted":"-6.6%"},"csatVotes":{"value":53,"diff":1,"formatted":"53","diffFormatted":"+1"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":5,"diff":-1,"formatted":"0:05","diffFormatted":"-00:01"},"art":{"value":131,"diff":-3,"formatted":"2:11","diffFormatted":"-00:03"},"aht":{"value":589,"diff":-22,"formatted":"9:49","diffFormatted":"-00:22"},"plan":{"kch":5000,"brr":40,"mcr":0,"frt":15,"art":120,"aht":720,"csat":50}},"status":"bad","notes":[]},{"code":"RU","name":"Русский","flag":"🇷🇺","metrics":{"kch":{"value":691,"diff":-50,"formatted":"691","diffFormatted":"-50"},"brr":{"value":38.3,"diff":1.8,"formatted":"38.3%","diffFormatted":"+1.8%"},"csat":{"value":0,"diff":-60,"formatted":"0%","diffFormatted":"-60.0%"},"csatVotes":{"value":1,"diff":-4,"formatted":"1","diffFormatted":"-4"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":1,"diff":-1,"formatted":"0:01","diffFormatted":"-00:01"},"art":{"value":44,"diff":-77,"formatted":"0:44","diffFormatted":"-01:17"},"aht":{"value":921,"diff":-17,"formatted":"15:21","diffFormatted":"-00:17"},"plan":{"kch":5000,"brr":40,"mcr":0,"frt":15,"art":120,"aht":900,"csat":50}},"status":"bad","notes":[]},{"code":"AR","name":"العربية","flag":"🇸🇦","metrics":{"kch":{"value":1162,"diff":34,"formatted":"1 162","diffFormatted":"+34"},"brr":{"value":30.7,"diff":-3.9,"formatted":"30.7%","diffFormatted":"-3.9%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":1,"diff":-1,"formatted":"0:01","diffFormatted":"-00:01"},"art":{"value":130,"diff":0,"formatted":"2:10","diffFormatted":"-00:00"},"aht":{"value":442,"diff":-11,"formatted":"7:22","diffFormatted":"-00:11"},"plan":{"kch":5000,"brr":40,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"UZ","name":"O'zbek","flag":"🇺🇿","metrics":{"kch":{"value":795,"diff":-98,"formatted":"795","diffFormatted":"-98"},"brr":{"value":18.4,"diff":1.2,"formatted":"18.4%","diffFormatted":"+1.2%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":4,"diff":-2,"formatted":"0:04","diffFormatted":"-00:02"},"art":{"value":77,"diff":-61,"formatted":"1:17","diffFormatted":"-01:01"},"aht":{"value":515,"diff":-14,"formatted":"8:35","diffFormatted":"-00:14"},"plan":{"kch":5000,"brr":25,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"DE","name":"Deutsch","flag":"🇩🇪","metrics":{"kch":{"value":288,"diff":-9,"formatted":"288","diffFormatted":"-9"},"brr":{"value":29.6,"diff":1.5,"formatted":"29.6%","diffFormatted":"+1.5%"},"csat":{"value":50,"diff":-50,"formatted":"50%","diffFormatted":"-50.0%"},"csatVotes":{"value":2,"diff":1,"formatted":"2","diffFormatted":"+1"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":8,"diff":0,"formatted":"0:08","diffFormatted":"00:00"},"art":{"value":53,"diff":-12,"formatted":"0:53","diffFormatted":"-00:12"},"aht":{"value":546,"diff":0,"formatted":"9:06","diffFormatted":"+00:00"},"plan":{"kch":2000,"brr":35,"mcr":0,"frt":15,"art":120,"aht":720,"csat":60}},"status":"bad","notes":[]},{"code":"PL","name":"Polski","flag":"🇵🇱","metrics":{"kch":{"value":546,"diff":56,"formatted":"546","diffFormatted":"+56"},"brr":{"value":39.4,"diff":-5.7,"formatted":"39.4%","diffFormatted":"-5.7%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":-0.2,"formatted":"0%","diffFormatted":"-0.2%"},"frt":{"value":17,"diff":-1,"formatted":"0:17","diffFormatted":"-00:01"},"art":{"value":57,"diff":-95,"formatted":"0:57","diffFormatted":"-01:35"},"aht":{"value":708,"diff":-29,"formatted":"11:48","diffFormatted":"-00:29"},"plan":{"kch":2500,"brr":40,"mcr":0,"frt":15,"art":120,"aht":720,"csat":60}},"status":"bad","notes":[]},{"code":"PT","name":"Português","flag":"🇵🇹","metrics":{"kch":{"value":352,"diff":15,"formatted":"352","diffFormatted":"+15"},"brr":{"value":21.1,"diff":-5.2,"formatted":"21.1%","diffFormatted":"-5.2%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":-0.3,"formatted":"0%","diffFormatted":"-0.3%"},"frt":{"value":4,"diff":0,"formatted":"0:04","diffFormatted":"00:00"},"art":{"value":68,"diff":-43,"formatted":"1:08","diffFormatted":"-00:43"},"aht":{"value":671,"diff":-94,"formatted":"11:11","diffFormatted":"-01:34"},"plan":{"kch":2500,"brr":30,"mcr":0,"frt":15,"art":120,"aht":660,"csat":50}},"status":"bad","notes":[]},{"code":"HI","name":"हिन्दी","flag":"🇮🇳","metrics":{"kch":{"value":417,"diff":-8,"formatted":"417","diffFormatted":"-8"},"brr":{"value":22.3,"diff":-0.7,"formatted":"22.3%","diffFormatted":"-0.7%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0.3,"diff":0.3,"formatted":"0.3%","diffFormatted":"+0.3%"},"frt":{"value":18,"diff":11,"formatted":"0:18","diffFormatted":"+00:11"},"art":{"value":145,"diff":81,"formatted":"2:25","diffFormatted":"+01:21"},"aht":{"value":578,"diff":-26,"formatted":"9:38","diffFormatted":"-00:26"},"plan":{"kch":2500,"brr":25,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"TR","name":"Türkçe","flag":"🇹🇷","metrics":{"kch":{"value":50,"diff":11,"formatted":"50","diffFormatted":"+11"},"brr":{"value":37.5,"diff":4.7,"formatted":"37.5%","diffFormatted":"+4.7%"},"csat":{"value":0,"diff":-100,"formatted":"0%","diffFormatted":"-100.0%"},"csatVotes":{"value":0,"diff":-1,"formatted":"0","diffFormatted":"-1"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":2,"diff":0,"formatted":"0:02","diffFormatted":"00:00"},"art":{"value":66,"diff":21,"formatted":"1:06","diffFormatted":"+00:21"},"aht":{"value":641,"diff":-34,"formatted":"10:41","diffFormatted":"-00:34"},"plan":{"kch":500,"brr":35,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"BN","name":"বাংলা","flag":"🇧🇩","metrics":{"kch":{"value":96,"diff":-17,"formatted":"96","diffFormatted":"-17"},"brr":{"value":35.6,"diff":9.5,"formatted":"35.6%","diffFormatted":"+9.5%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":3,"diff":1,"formatted":"0:03","diffFormatted":"+00:01"},"art":{"value":106,"diff":-74,"formatted":"1:46","diffFormatted":"-01:14"},"aht":{"value":1282,"diff":15,"formatted":"21:22","diffFormatted":"+00:15"},"plan":{"kch":1000,"brr":35,"mcr":0,"frt":15,"art":120,"aht":720,"csat":50}},"status":"bad","notes":[]},{"code":"HU","name":"Magyar","flag":"🇭🇺","metrics":{"kch":{"value":272,"diff":-127,"formatted":"272","diffFormatted":"-127"},"brr":{"value":31.5,"diff":1.6,"formatted":"31.5%","diffFormatted":"+1.6%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":8,"diff":2,"formatted":"0:08","diffFormatted":"+00:02"},"art":{"value":87,"diff":-36,"formatted":"1:27","diffFormatted":"-00:36"},"aht":{"value":520,"diff":-58,"formatted":"8:40","diffFormatted":"-00:58"},"plan":{"kch":1000,"brr":35,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"CS","name":"Čeština","flag":"🇨🇿","metrics":{"kch":{"value":140,"diff":-35,"formatted":"140","diffFormatted":"-35"},"brr":{"value":46.2,"diff":3.2,"formatted":"46.2%","diffFormatted":"+3.2%"},"csat":{"value":0,"diff":-100,"formatted":"0%","diffFormatted":"-100.0%"},"csatVotes":{"value":0,"diff":-1,"formatted":"0","diffFormatted":"-1"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":9,"diff":0,"formatted":"0:09","diffFormatted":"00:00"},"art":{"value":50,"diff":2,"formatted":"0:50","diffFormatted":"+00:02"},"aht":{"value":724,"diff":-45,"formatted":"12:04","diffFormatted":"-00:45"},"plan":{"kch":500,"brr":45,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"BG","name":"Български","flag":"🇧🇬","metrics":{"kch":{"value":85,"diff":10,"formatted":"85","diffFormatted":"+10"},"brr":{"value":25.4,"diff":-5.2,"formatted":"25.4%","diffFormatted":"-5.2%"},"csat":{"value":72.7,"diff":11.2,"formatted":"72.7%","diffFormatted":"+11.2%"},"csatVotes":{"value":11,"diff":-2,"formatted":"11","diffFormatted":"-2"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":14,"diff":0,"formatted":"0:14","diffFormatted":"-00:00"},"art":{"value":64,"diff":12,"formatted":"1:04","diffFormatted":"+00:12"},"aht":{"value":692,"diff":-5,"formatted":"11:32","diffFormatted":"-00:05"},"plan":{"kch":500,"brr":20,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"warning","notes":[]}],"critical":{"problems":[{"title":"EN - ART: 02:11","locale":"EN","language":"English","metric":"ART","value":"02:11","delta":"−00:03","description":"Среднее время ответа выше плана (02:00)","recommendation":"🔊 Требуется анализ","day":"Вторник","isAnalysis":true,"taskNum":1},{"title":"RU - AHT: 15:21","locale":"RU","language":"Русский","metric":"AHT","value":"15:21","delta":"−00:17","description":"План не выполнен (15:00)","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":2},{"title":"AR - ART: 02:10","locale":"AR","language":"العربية","metric":"ART","value":"02:10","delta":"−00:01","description":"План не выполнен (02:00)","recommendation":"🔊 Требуется анализ","day":"Пятница","isAnalysis":true,"taskNum":3},{"title":"PL - FRT: 00:17","locale":"PL","language":"Polski","metric":"FRT","value":"00:17","delta":"−00:01","description":"План не выполнен (00:15)","recommendation":"🔊 Требуется анализ","day":"Четверг","isAnalysis":true,"taskNum":4},{"title":"PT - AHT: 11:11","locale":"PT","language":"Português","metric":"AHT","value":"11:11","delta":"−01:34","description":"План не выполнен (10:00)","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":5},{"title":"HI - ART: 02:25","locale":"HI","language":"हिन्दी","metric":"ART","value":"02:25","delta":"+01:21","description":"Существенное превышение плана","recommendation":"🔊 Требуется анализ","day":"Четверг","isAnalysis":true,"taskNum":6},{"title":"HI - FRT: 00:18","locale":"HI","language":"हिन्दी","metric":"FRT","value":"00:18","delta":"+00:11","description":"Замедление первого ответа","recommendation":"🔊 Требуется анализ","day":"Четверг","isAnalysis":true,"taskNum":7},{"title":"HI - MCR: 0.3%","locale":"HI","language":"हिन्दी","metric":"MCR","value":"0.3%","delta":"+0.3%","description":"Ухудшение показателя","recommendation":"🔊 Требуется анализ","day":"Вторник","isAnalysis":true,"taskNum":8},{"title":"TR - AHT: 10:41","locale":"TR","language":"Türkçe","metric":"AHT","value":"10:41","delta":"−00:34","description":"План не выполнен (10:00)","recommendation":"🔊 Требуется анализ","day":"Пятница","isAnalysis":true,"taskNum":9},{"title":"BN - AHT: 21:22","locale":"BN","language":"বাংলা","metric":"AHT","value":"21:22","delta":"+00:16","description":"План не выполнен (21:00)","recommendation":"🔊 Требуется анализ","day":"Пятница","isAnalysis":true,"taskNum":10},{"title":"CS - AHT: 12:04","locale":"CS","language":"Čeština","metric":"AHT","value":"12:04","delta":"−00:45","description":"План не выполнен (11:00)","recommendation":"🔊 Требуется анализ","day":"Вторник","isAnalysis":true,"taskNum":11},{"title":"BG - AHT: 11:32","locale":"BG","language":"Български","metric":"AHT","value":"11:32","delta":"−00:06","description":"План не выполнен (11:00)","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":12}],"solutions":[],"notes":[]}},"coldbet":{"config":{"id":"coldbet","name":"Coldbet","icon":"❄️","color":"#10b981","colorLight":"#d1fae5","colorDark":"#047857","gradient":"from-emerald-500 to-emerald-600","spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1jxp-6VpyPfjyPDCNrS9ay_Zm0HDBYcIjZdSn39OdmLU/edit","externalSpreadsheetId":{"test":"1jxp-6VpyPfjyPDCNrS9ay_Zm0HDBYcIjZdSn39OdmLU"},"externalSpreadsheetMode":"test","useExternalLocales":true,"localesSheetStructure":"per-locale"},"monthly":{"vch":24823,"kch":18063,"brr":27.2,"csat":77.8,"csatVotes":9,"mcr":0.1,"frt":8,"art":119,"aht":724},"weekly":{"current":{"vch":6556,"kch":4754,"brr":27.5,"csat":100,"csatVotes":1,"mcr":0,"frt":8,"art":113,"aht":726},"previous":{"vch":0,"kch":0,"brr":0,"csat":0,"csatVotes":0,"mcr":0,"frt":0,"art":0,"aht":0},"diff":{"vch":{"value":638,"formatted":"+638"},"kch":{"value":442,"formatted":"+442"},"brr":{"value":0.4,"formatted":"+0,4%"},"csat":{"value":0,"formatted":"+0"},"csatVotes":{"value":0,"formatted":"+0"},"mcr":{"value":-0.1,"formatted":"-0,1%"},"frt":{"value":-2,"formatted":"-0:02"},"art":{"value":-37,"formatted":"-0:37"},"aht":{"value":-45,"formatted":"-0:45"}},"customDiff":{"vch":{"value":638,"formatted":"+638"},"kch":{"value":442,"formatted":"+442"},"brr":{"value":0.4,"formatted":"+0,4%"},"csat":{"value":0,"formatted":"+0"},"csatVotes":{"value":0,"formatted":"+0"},"mcr":{"value":-0.1,"formatted":"-0,1%"},"frt":{"value":-2,"formatted":"-0:02"},"art":{"value":-37,"formatted":"-0:37"},"aht":{"value":-45,"formatted":"-0:45"}}},"history":{"labels":["Янв. Н-1","Янв. Н-2","Янв. Н-3","Янв. Н-4","Янв. Н-5"],"data":{"vch":[4831,5331,5509,5918,6556],"kch":[3528,3900,4025,4312,4754],"brr":[0.27,26.8,26.9,27.1,27.5],"csat":[0,100,83.3,100,0],"csatVotes":[0,1,6,1,1],"mcr":[0.3,0.1,0,0.1,0],"frt":[7,8,7,10,8],"art":[88,111,116,150,113],"aht":[665,701,708,771,726]}},"locales":[{"code":"UZ","name":"O'zbek","flag":"🇺🇿","metrics":{"kch":{"value":1659,"diff":-22,"formatted":"1 659","diffFormatted":"-22"},"brr":{"value":26.3,"diff":2.7,"formatted":"26.3%","diffFormatted":"+2.7%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0.1,"diff":0,"formatted":"0.1%","diffFormatted":"+0.0%"},"frt":{"value":17,"diff":-3,"formatted":"0:17","diffFormatted":"-00:03"},"art":{"value":198,"diff":-87,"formatted":"3:18","diffFormatted":"-01:27"},"aht":{"value":1110,"diff":0,"formatted":"18:30","diffFormatted":"+00:00"},"plan":{"kch":5000,"brr":25,"mcr":0,"frt":15,"art":120,"aht":720,"csat":50}},"status":"bad","notes":[]},{"code":"AR","name":"العربية","flag":"🇸🇦","metrics":{"kch":{"value":2222,"diff":448,"formatted":"2 222","diffFormatted":"+448"},"brr":{"value":22.6,"diff":-2.3,"formatted":"22.6%","diffFormatted":"-2.3%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":1,"diff":0,"formatted":"0:01","diffFormatted":"00:00"},"art":{"value":41,"diff":4,"formatted":"0:41","diffFormatted":"+00:04"},"aht":{"value":415,"diff":-15,"formatted":"6:55","diffFormatted":"-00:15"},"plan":{"kch":5000,"brr":30,"mcr":0,"frt":15,"art":120,"aht":900,"csat":50}},"status":"bad","notes":[]},{"code":"RU","name":"Русский","flag":"🇷🇺","metrics":{"kch":{"value":229,"diff":19,"formatted":"229","diffFormatted":"+19"},"brr":{"value":42.8,"diff":0.7,"formatted":"42.8%","diffFormatted":"+0.7%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":3,"diff":0,"formatted":"0:03","diffFormatted":"00:00"},"art":{"value":57,"diff":-6,"formatted":"0:57","diffFormatted":"-00:06"},"aht":{"value":883,"diff":-20,"formatted":"14:43","diffFormatted":"-00:20"},"plan":{"kch":1000,"brr":40,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"EN","name":"English","flag":"🇬🇧","metrics":{"kch":{"value":224,"diff":-11,"formatted":"224","diffFormatted":"-11"},"brr":{"value":30.7,"diff":2.1,"formatted":"30.7%","diffFormatted":"+2.1%"},"csat":{"value":0,"diff":-100,"formatted":"0%","diffFormatted":"-100.0%"},"csatVotes":{"value":1,"diff":0,"formatted":"1","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":8,"diff":2,"formatted":"0:08","diffFormatted":"+00:02"},"art":{"value":244,"diff":41,"formatted":"4:04","diffFormatted":"+00:41"},"aht":{"value":735,"diff":-40,"formatted":"12:15","diffFormatted":"-00:40"},"plan":{"kch":750,"brr":25,"mcr":0,"frt":15,"art":120,"aht":600,"csat":50}},"status":"bad","notes":[]},{"code":"FR","name":"Français","flag":"🇫🇷","metrics":{"kch":{"value":118,"diff":44,"formatted":"118","diffFormatted":"+44"},"brr":{"value":60.9,"diff":-2.8,"formatted":"60.9%","diffFormatted":"-2.8%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"frt":{"value":4,"diff":0,"formatted":"0:04","diffFormatted":"00:00"},"art":{"value":266,"diff":-14,"formatted":"4:26","diffFormatted":"-00:14"},"aht":{"value":1070,"diff":3,"formatted":"17:50","diffFormatted":"+00:03"},"plan":{"kch":400,"brr":35,"mcr":0,"frt":15,"art":120,"aht":720,"csat":60}},"status":"bad","notes":[]},{"code":"PL","name":"Polski","flag":"🇵🇱","metrics":{"kch":{"value":278,"diff":-20,"formatted":"278","diffFormatted":"-20"},"brr":{"value":27.8,"diff":-1.6,"formatted":"27.8%","diffFormatted":"-1.6%"},"csat":{"value":0,"diff":0,"formatted":"0%","diffFormatted":"+0.0%"},"csatVotes":{"value":0,"diff":0,"formatted":"0","diffFormatted":"+0"},"mcr":{"value":0,"diff":-0.7,"formatted":"0%","diffFormatted":"-0.7%"},"frt":{"value":16,"diff":1,"formatted":"0:16","diffFormatted":"+00:01"},"art":{"value":65,"diff":-4,"formatted":"1:05","diffFormatted":"-00:04"},"aht":{"value":667,"diff":-114,"formatted":"11:07","diffFormatted":"-01:54"},"plan":{"kch":1500,"brr":35,"mcr":0,"frt":15,"art":120,"aht":600,"csat":60}},"status":"bad","notes":[]}],"critical":{"problems":[{"title":"EN - ART: 04:04","locale":"EN","language":"English","metric":"ART","value":"04:04","delta":"+00:41","description":"Время первого ответа превышает план","recommendation":"🔊 Требуется анализ","day":"Вторник","isAnalysis":true,"taskNum":1},{"title":"EN - AHT: 12:15","locale":"EN","language":"English","metric":"AHT","value":"12:15","delta":"-00:40","description":"Показатель выше допустимого уровня","recommendation":"🔊 Требуется анализ","day":"Вторник","isAnalysis":true,"taskNum":2},{"title":"UZ - AHT: 18:30","locale":"UZ","language":"O'zbek","metric":"AHT","value":"18:30","delta":"+00:01","description":"Высокое время обработки диалогов","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":3},{"title":"UZ - FRT: 00:17","locale":"UZ","language":"O'zbek","metric":"FRT","value":"00:17","delta":"-00:03","description":"Замедление первого ответа","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":4},{"title":"PL - FRT: 00:16","locale":"PL","language":"Polski","metric":"FRT","value":"00:16","delta":"+00:01","description":"Плановое значение не выполнено","recommendation":"🔊 Требуется анализ","day":"Четверг","isAnalysis":true,"taskNum":5},{"title":"FR - ART: 04:26","locale":"FR","language":"Français","metric":"ART","value":"04:26","delta":"-00:14","description":"Высокое время первого ответа","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":6},{"title":"FR - AHT: 17:50","locale":"FR","language":"Français","metric":"AHT","value":"17:50","delta":"+00:04","description":"Значительное превышение нормы","recommendation":"🔊 Требуется анализ","day":"Среда","isAnalysis":true,"taskNum":7},{"title":"RU - AHT: 14:43","locale":"RU","language":"Русский","metric":"AHT","value":"14:43","delta":"-00:21","description":"Показатель выше плана","recommendation":"🔊 Требуется анализ","day":"Пятница","isAnalysis":true,"taskNum":8}],"solutions":[],"notes":[]}}},"plans":{"monday":[{"id":"id_1770417835160_npja1nqcs","title":"📊СБОР И АНАЛИЗ СТАТИСТИКИ ЗА НЕДЕЛЮ","description":"Цель: Провести полный анализ данных Spinbetter и Coldbet за прошедшую неделю для формирования новых задач","project":"general","status":"pending","priority":2,"blockNumber":null,"taskNum":null,"isPriority":true,"tags":[],"analysis":null,"descriptionHtml":null,"day":"monday"},{"id":"id_1770417835161_iopforgsx","title":"","description":"• Собрать статистику за неделю 26.01 – 01.02\n• Проанализировать динамику по локалям\n• Выявить новые тенденции\n• Сформировать отчет с выводами","project":"general","status":"pending","priority":null,"blockNumber":1,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null,"day":"monday"},{"id":"id_1770417835178_uwvxdmdpn","title":"Создать шаблоны нового месяця - Февраль, на двух преоктах + локали","description":"Spinbetter/Coldbet\n• Main\n• February\n• Locales","project":"general","status":"pending","priority":null,"blockNumber":5,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null,"day":"monday"},{"id":"id_1770417835194_052h1c2v9","title":"Push: Работа с email-запросами","description":"Задача с прошлой недели по разбору email'ов (запрос от Андрея), проверить в Reddy и повторно тегнуть ответственных","project":"general","status":"pending","priority":null,"blockNumber":7,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null,"day":"monday"}],"tuesday":[{"id":"id_1770417835163_7kjkxgd3i","title":"💡 Расширение мониторинга","description":"Наблюдение + стата 💡\n• Испанский язык — мониторинг обращений\n• Французский язык — мониторинг обращений","project":"general","status":"pending","priority":null,"blockNumber":2,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null,"day":"tuesday"},{"id":"id_1770417835195_h3axb9pp0","title":"EN - ART: 02:11","description":"Среднее время ответа выше плана (02:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":1,"isPriority":false,"tags":["Критический анализ","ART"],"analysis":{"locale":"EN","metric":"ART","value":"02:11","delta":"−00:03","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"tuesday"},{"id":"id_1770417835195_bgqh49759","title":"HI - MCR: 0.3%","description":"Ухудшение показателя","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":8,"isPriority":false,"tags":["Критический анализ","MCR"],"analysis":{"locale":"HI","metric":"MCR","value":"0.3%","delta":"+0.3%","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"tuesday"},{"id":"id_1770417835195_72zzi2sqd","title":"CS - AHT: 12:04","description":"План не выполнен (11:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":11,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"CS","metric":"AHT","value":"12:04","delta":"−00:45","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"tuesday"},{"id":"id_1770417835195_7wm5u23dt","title":"EN - ART: 04:04","description":"Время первого ответа превышает план","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":1,"isPriority":false,"tags":["Критический анализ","ART"],"analysis":{"locale":"EN","metric":"ART","value":"04:04","delta":"+00:41","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"tuesday"},{"id":"id_1770417835195_7oael061o","title":"EN - AHT: 12:15","description":"Показатель выше допустимого уровня","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":2,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"EN","metric":"AHT","value":"12:15","delta":"-00:40","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"tuesday"}],"wednesday":[{"id":"id_1770417835165_4mfjwyyak","title":"Работа с кейсами","description":"• Пересмотреть кейсы в Reddy за прошлую неделю и тегнуть Лео/Роман","project":"general","status":"pending","priority":null,"blockNumber":3,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835188_zvs43kis1","title":"Push: CSAT ","description":"📊 CSAT — Массовое отсутствие\n• Spinbetter: Локали без оценок\n• Coldbet: Локали без оценок\n• Проверить кол-во оставленных оценок\n• Пушнуть ответственных\nReddy link","project":"general","status":"pending","priority":null,"blockNumber":6,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":"📊 CSAT — Массовое отсутствие\n• Spinbetter: Локали без оценок\n• Coldbet: Локали без оценок\n• Проверить кол-во оставленных оценок\n• Пушнуть ответственных\n<a href=\"https://lnk.reddy.team/message/1974522/440\" target=\"_blank\" class=\"text-blue-600 underline hover:text-blue-800 font-bold transition-colors\">Reddy link</a>","day":"wednesday"},{"id":"id_1770417835195_slhc5mh7h","title":"RU - AHT: 15:21","description":"План не выполнен (15:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":2,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"RU","metric":"AHT","value":"15:21","delta":"−00:17","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835195_5vu60j1jb","title":"PT - AHT: 11:11","description":"План не выполнен (10:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":5,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"PT","metric":"AHT","value":"11:11","delta":"−01:34","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835195_fqzynosz8","title":"BG - AHT: 11:32","description":"План не выполнен (11:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":12,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"BG","metric":"AHT","value":"11:32","delta":"−00:06","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835195_4qlvv7qwb","title":"UZ - AHT: 18:30","description":"Высокое время обработки диалогов","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":3,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"UZ","metric":"AHT","value":"18:30","delta":"+00:01","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835195_f7atwg1up","title":"UZ - FRT: 00:17","description":"Замедление первого ответа","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":4,"isPriority":false,"tags":["Критический анализ","FRT"],"analysis":{"locale":"UZ","metric":"FRT","value":"00:17","delta":"-00:03","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835195_b1pjmfvn7","title":"FR - ART: 04:26","description":"Высокое время первого ответа","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":6,"isPriority":false,"tags":["Критический анализ","ART"],"analysis":{"locale":"FR","metric":"ART","value":"04:26","delta":"-00:14","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"},{"id":"id_1770417835195_lnxh38cj7","title":"FR - AHT: 17:50","description":"Значительное превышение нормы","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":7,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"FR","metric":"AHT","value":"17:50","delta":"+00:04","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"wednesday"}],"thursday":[{"id":"id_1770417835195_7dkbm52sl","title":"PL - FRT: 00:17","description":"План не выполнен (00:15)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":4,"isPriority":false,"tags":["Критический анализ","FRT"],"analysis":{"locale":"PL","metric":"FRT","value":"00:17","delta":"−00:01","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"thursday"},{"id":"id_1770417835195_a60pwfh1z","title":"HI - ART: 02:25","description":"Существенное превышение плана","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":6,"isPriority":false,"tags":["Критический анализ","ART"],"analysis":{"locale":"HI","metric":"ART","value":"02:25","delta":"+01:21","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"thursday"},{"id":"id_1770417835195_ldqnnq0c6","title":"HI - FRT: 00:18","description":"Замедление первого ответа","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":7,"isPriority":false,"tags":["Критический анализ","FRT"],"analysis":{"locale":"HI","metric":"FRT","value":"00:18","delta":"+00:11","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"thursday"},{"id":"id_1770417835195_d39n6k0r5","title":"PL - FRT: 00:16","description":"Плановое значение не выполнено","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":5,"isPriority":false,"tags":["Критический анализ","FRT"],"analysis":{"locale":"PL","metric":"FRT","value":"00:16","delta":"+00:01","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"thursday"}],"friday":[{"id":"id_1770417835195_pt2c47hkf","title":"AR - ART: 02:10","description":"План не выполнен (02:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":3,"isPriority":false,"tags":["Критический анализ","ART"],"analysis":{"locale":"AR","metric":"ART","value":"02:10","delta":"−00:01","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"friday"},{"id":"id_1770417835195_ygwawp061","title":"TR - AHT: 10:41","description":"План не выполнен (10:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":9,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"TR","metric":"AHT","value":"10:41","delta":"−00:34","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"friday"},{"id":"id_1770417835195_u44hmr9sq","title":"BN - AHT: 21:22","description":"План не выполнен (21:00)","project":"spinbetter","status":"pending","priority":null,"blockNumber":null,"taskNum":10,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"BN","metric":"AHT","value":"21:22","delta":"+00:16","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"friday"},{"id":"id_1770417835195_gqwdwjmd7","title":"RU - AHT: 14:43","description":"Показатель выше плана","project":"coldbet","status":"pending","priority":null,"blockNumber":null,"taskNum":8,"isPriority":false,"tags":["Критический анализ","AHT"],"analysis":{"locale":"RU","metric":"AHT","value":"14:43","delta":"-00:21","recommendation":"🔊 Требуется анализ"},"descriptionHtml":null,"day":"friday"}],"perspective":[{"id":"id_1770417835157_0kbxg9z07","title":"🔥СНИЖЕНИЕ ОБЪЕМА ОБРАЩЕНИЙ","description":"Цель: Уменьшить общее количество чатов в саппорт\n\nДекабрь 2025 (итого):\n• Spinbetter: 30 939\n• Coldbet: 12 823\n\n📊 Январь 2025\n• Spinbetter: 23 279\nНеделя 4: 6 644\n\n• Coldbet: 18 063\nНеделя 3: 4 754","project":"general","status":"pending","priority":1,"blockNumber":null,"taskNum":null,"isPriority":true,"tags":[],"analysis":null,"descriptionHtml":null,"day":"perspective"},{"id":"id_1770417835175_t8q3kfcja","title":"🤖 Адаптация бота на Coldbet","description":"\"На Coldbet сейчас работает старый формат бота, поэтому для адаптации потребуется провести полное обновление до новой системы\"\n\nСтатус адаптации базы знаний ColdBet\n\n• Пересмотр всех запросов — ✅ Выполнено\n• Удаление неактуальных/универсальных сценариев — ✅ Выполнено\n• Адаптация под структуру разделов ColdBet — ✅ Выполнено\n• Проверка соответствия пользовательским сценариям — ✅ Выполнено\n•  Финальная вычитка → Передали Александру на утверждение ✅ Выполнено\n\nСледующий шаг:\n⏳ Ожидаем апрува от Александра\n⏳ Передача на платформу\n\nТаблица для редактирования: https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525","project":"general","status":"pending","priority":null,"blockNumber":4,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":"&quot;На Coldbet сейчас работает старый формат бота, поэтому для адаптации потребуется провести полное обновление до новой системы&quot;\n\nСтатус адаптации базы знаний ColdBet\n\n• Пересмотр всех запросов — ✅ Выполнено\n• Удаление неактуальных/универсальных сценариев — ✅ Выполнено\n• Адаптация под структуру разделов ColdBet — ✅ Выполнено\n• Проверка соответствия пользовательским сценариям — ✅ Выполнено\n•  Финальная вычитка → Передали Александру на утверждение ✅ Выполнено\n\nСледующий шаг:\n⏳ Ожидаем апрува от Александра\n⏳ Передача на платформу\n\nТаблица для редактирования: <a href=\"https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525\" target=\"_blank\" class=\"text-blue-600 underline hover:text-blue-800 font-bold transition-colors\">https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525</a>","day":"perspective"}]},"workload":{"days":[{"day":"Понедельник","tasks":4,"other":0,"total":4,"limit":4,"status":"warning","overload":0},{"day":"Вторник","tasks":6,"other":0,"total":6,"limit":4,"status":"danger","overload":2},{"day":"Среда","tasks":9,"other":0,"total":9,"limit":4,"status":"danger","overload":5},{"day":"Четверг","tasks":4,"other":0,"total":4,"limit":4,"status":"warning","overload":0},{"day":"Пятница","tasks":4,"other":0,"total":4,"limit":4,"status":"warning","overload":0},{"day":"Перспектива","tasks":2,"other":0,"total":2,"limit":4,"status":"success","overload":0}],"limit":4},"nextWeekPlans":{"monday":[{"id":"id_1770417835841_l51mrib0z","title":"📊СБОР И АНАЛИЗ СТАТИСТИКИ ЗА НЕДЕЛЮ","description":"Цель: Провести полный анализ данных Spinbetter и Coldbet за прошедшую неделю для формирования новых задач","project":"general","status":"pending","priority":2,"blockNumber":null,"taskNum":null,"isPriority":true,"tags":[],"analysis":null,"descriptionHtml":null},{"id":"id_1770417835841_zzweb5gn4","title":"","description":"• Собрать статистику за неделю 26.01 – 01.02\n• Проанализировать динамику по локалям\n• Выявить новые тенденции\n• Сформировать отчет с выводами","project":"general","status":"pending","priority":null,"blockNumber":1,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null},{"id":"id_1770417835852_48gfbcoz3","title":"Создать шаблоны нового месяця - Февраль, на двух преоктах + локали","description":"Spinbetter/Coldbet\n• Main\n• February\n• Locales","project":"general","status":"pending","priority":null,"blockNumber":5,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null},{"id":"id_1770417835857_nq2sg19yj","title":"Push: Работа с email-запросами","description":"Задача с прошлой недели по разбору email'ов (запрос от Андрея), проверить в Reddy и повторно тегнуть ответственных","project":"general","status":"pending","priority":null,"blockNumber":7,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null}],"tuesday":[{"id":"id_1770417835843_i1yzgpy1i","title":"💡 Расширение мониторинга","description":"Наблюдение + стата 💡\n• Испанский язык — мониторинг обращений\n• Французский язык — мониторинг обращений","project":"general","status":"pending","priority":null,"blockNumber":2,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null}],"wednesday":[{"id":"id_1770417835844_5m862xvwu","title":"Работа с кейсами","description":"• Пересмотреть кейсы в Reddy за прошлую неделю и тегнуть Лео/Роман","project":"general","status":"pending","priority":null,"blockNumber":3,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":null},{"id":"id_1770417835856_kvnikp5q7","title":"Push: CSAT ","description":"📊 CSAT — Массовое отсутствие\n• Spinbetter: Локали без оценок\n• Coldbet: Локали без оценок\n• Проверить кол-во оставленных оценок\n• Пушнуть ответственных\nReddy link","project":"general","status":"pending","priority":null,"blockNumber":6,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":"📊 CSAT — Массовое отсутствие\n• Spinbetter: Локали без оценок\n• Coldbet: Локали без оценок\n• Проверить кол-во оставленных оценок\n• Пушнуть ответственных\n<a href=\"https://lnk.reddy.team/message/1974522/440\" target=\"_blank\" class=\"text-blue-600 underline hover:text-blue-800 font-bold transition-colors\">Reddy link</a>"}],"thursday":[],"friday":[],"perspective":[{"id":"id_1770417835840_xha0avyh7","title":"🔥СНИЖЕНИЕ ОБЪЕМА ОБРАЩЕНИЙ","description":"Цель: Уменьшить общее количество чатов в саппорт\n\nДекабрь 2025 (итого):\n• Spinbetter: 30 939\n• Coldbet: 12 823\n\n📊 Январь 2025\n• Spinbetter: 23 279\nНеделя 4: 6 644\n\n• Coldbet: 18 063\nНеделя 3: 4 754","project":"general","status":"pending","priority":1,"blockNumber":null,"taskNum":null,"isPriority":true,"tags":[],"analysis":null,"descriptionHtml":null},{"id":"id_1770417835851_z6cvbh0sd","title":"🤖 Адаптация бота на Coldbet","description":"\"На Coldbet сейчас работает старый формат бота, поэтому для адаптации потребуется провести полное обновление до новой системы\"\n\nСтатус адаптации базы знаний ColdBet\n\n• Пересмотр всех запросов — ✅ Выполнено\n• Удаление неактуальных/универсальных сценариев — ✅ Выполнено\n• Адаптация под структуру разделов ColdBet — ✅ Выполнено\n• Проверка соответствия пользовательским сценариям — ✅ Выполнено\n•  Финальная вычитка → Передали Александру на утверждение ✅ Выполнено\n\nСледующий шаг:\n⏳ Ожидаем апрува от Александра\n⏳ Передача на платформу\n\nТаблица для редактирования: https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525","project":"general","status":"pending","priority":null,"blockNumber":4,"taskNum":null,"isPriority":false,"tags":[],"analysis":null,"descriptionHtml":"&quot;На Coldbet сейчас работает старый формат бота, поэтому для адаптации потребуется провести полное обновление до новой системы&quot;\n\nСтатус адаптации базы знаний ColdBet\n\n• Пересмотр всех запросов — ✅ Выполнено\n• Удаление неактуальных/универсальных сценариев — ✅ Выполнено\n• Адаптация под структуру разделов ColdBet — ✅ Выполнено\n• Проверка соответствия пользовательским сценариям — ✅ Выполнено\n•  Финальная вычитка → Передали Александру на утверждение ✅ Выполнено\n\nСледующий шаг:\n⏳ Ожидаем апрува от Александра\n⏳ Передача на платформу\n\nТаблица для редактирования: <a href=\"https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525\" target=\"_blank\" class=\"text-blue-600 underline hover:text-blue-800 font-bold transition-colors\">https://docs.google.com/spreadsheets/d/1KfdPdlojutXifoTUaIfruLWr6Auw-SjObxYrgdoSnYU/edit?gid=244624525#gid=244624525</a>"}]}};



    

    let currentProject = 'spinbetter';

    let activeMetrics = ['vch', 'kch'];

    let mainChart = null;



    

    const allMetrics = ['vch', 'kch', 'brr', 'csat', 'csatVotes', 'mcr', 'frt', 'art', 'aht'];



    

    const metricConfig = {

        vch: { label: 'ВЧ', icon: '📊', color: '#3b82f6', yAxis: 'chats', unit: '' },

        kch: { label: 'КЧ', icon: '📈', color: '#8b5cf6', yAxis: 'chats', unit: '' },

        brr: { label: 'BRR', icon: '🎯', color: '#10b981', yAxis: 'percent', unit: '%' },

        csat: { label: 'CSAT', icon: '⭐', color: '#f59e0b', yAxis: 'percent', unit: '%' },

        csatVotes: { label: 'Оценки', icon: '🗳️', color: '#06b6d4', yAxis: 'chats', unit: '' },

        mcr: { label: 'MCR', icon: '🚨', color: '#ef4444', yAxis: 'percent', unit: '%' },

        frt: { label: 'FRT', icon: '⏱️', color: '#ec4899', yAxis: 'time', unit: 'time' },

        art: { label: 'ART', icon: '⏳', color: '#14b8a6', yAxis: 'time', unit: 'time' },

        aht: { label: 'AHT', icon: '🕐', color: '#6366f1', yAxis: 'time', unit: 'time' }

    };



    

    const overviewData = {

        spinbetter: reportData.projects.spinbetter.weekly,

        coldbet: reportData.projects.coldbet.weekly

    };



    

    const chartData = {

        spinbetter: reportData.projects.spinbetter.history,

        coldbet: reportData.projects.coldbet.history

    };





    

    

    



    function formatNumber(num) {

        if (num === null || num === undefined) return '0';

        return num.toLocaleString('ru-RU');

    }



    function formatTime(seconds) {

        

        if (typeof seconds === 'string') return seconds;

        if (typeof seconds !== 'number' || isNaN(seconds)) return '0:00';

        const mins = Math.floor(Math.abs(seconds) / 60);

        const secs = Math.round(Math.abs(seconds) % 60);

        

        if (mins >= 60) {

            const hours = Math.floor(mins / 60);

            const remainingMins = mins % 60;

            return `${hours.toString().padStart(2, '0')}:${remainingMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        }

        

        return `${mins}:${secs.toString().padStart(2, '0')}`;

    }



    


    function copyToClipboard(text) {

        if (!text) return;



        

        const el = document.createElement('textarea');

        el.value = text;

        el.setAttribute('readonly', '');

        el.style.position = 'absolute';

        el.style.left = '-9999px';

        document.body.appendChild(el);



        el.select();

        document.execCommand('copy');

        document.body.removeChild(el);



        

        showNotification('✅ Ссылка скопирована');

    }



    


    function showNotification(message) {

        let toast = document.getElementById('report-toast');

        if (!toast) {

            toast = document.createElement('div');

            toast.id = 'report-toast';

            toast.className = 'fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl z-[9999] font-bold text-sm transform transition-all duration-300 opacity-0 translate-y-4';

            document.body.appendChild(toast);

        }



        toast.textContent = message;

        toast.classList.remove('opacity-0', 'translate-y-4');

        toast.classList.add('opacity-100', 'translate-y-0');



        setTimeout(() => {

            toast.classList.remove('opacity-100', 'translate-y-0');

            toast.classList.add('opacity-0', 'translate-y-4');

        }, 3000);

    }





    

    

    



    function showTab(tab) {

        ['overview', 'spinbetter', 'coldbet', 'plans', 'workload'].forEach(t => {

            const el = document.getElementById('content-' + t);

            const btn = document.getElementById('tab-' + t);

            if (el) el.classList.add('hidden');

            if (btn) {

                btn.classList.remove('tab-active');

                btn.classList.add('tab-inactive');

            }

        });

        document.getElementById('content-' + tab).classList.remove('hidden');

        document.getElementById('tab-' + tab).classList.remove('tab-inactive');

        document.getElementById('tab-' + tab).classList.add('tab-active');

    }



    function showSubTab(prefix, type) {

        const idResults = prefix + '-content-results';

        const idCritical = prefix + '-content-critical';

        const idBtnResults = prefix + '-subtab-results';

        const idBtnCritical = prefix + '-subtab-critical';



        const elResults = document.getElementById(idResults);

        const elCritical = document.getElementById(idCritical);

        const btnResults = document.getElementById(idBtnResults);

        const btnCritical = document.getElementById(idBtnCritical);



        if (!elResults || !elCritical) return;



        if (type === 'results') {

            elResults.classList.remove('hidden');

            elCritical.classList.add('hidden');

            btnResults.classList.add('subtab-active');

            btnResults.classList.remove('subtab-inactive');

            btnCritical.classList.remove('subtab-active');

            btnCritical.classList.add('subtab-inactive');

        } else {

            elResults.classList.add('hidden');

            elCritical.classList.remove('hidden');

            btnCritical.classList.add('subtab-active');

            btnCritical.classList.remove('subtab-inactive');

            btnResults.classList.remove('subtab-active');

            btnResults.classList.add('subtab-inactive');

        }

    }



    


    function showProjectTab(projectId, type) {

        showTab(projectId);

        showSubTab(projectId.substring(0, 4), type); 

        

        window.scrollTo({ top: 0, behavior: 'smooth' });

    }





    

    

    



    function selectOverviewProject(proj) {

        currentProject = proj;



        const spinBtn = document.getElementById('overview-btn-spinbetter');

        const coldBtn = document.getElementById('overview-btn-coldbet');

        const chartIcon = document.getElementById('chartProjectIcon');

        const chartTitle = document.getElementById('chartProjectTitle');



        if (proj === 'spinbetter') {

            spinBtn.classList.add('proj-active');

            spinBtn.classList.remove('proj-inactive');

            coldBtn.classList.remove('proj-active');

            coldBtn.classList.add('proj-inactive');

            chartIcon.textContent = '🎰';

            chartTitle.textContent = 'Spinbetter — Динамика';

        } else {

            coldBtn.classList.add('proj-active');

            coldBtn.classList.remove('proj-inactive');

            spinBtn.classList.remove('proj-active');

            spinBtn.classList.add('proj-inactive');

            chartIcon.textContent = '❄️';

            chartTitle.textContent = 'Coldbet — Динамика';

        }



        updateKPIGrid(proj);

        if (mainChart) updateChart();

    }



    function updateKPIGrid(proj) {

        const d = overviewData[proj].current;

        const diff = overviewData[proj].diff || {};

        const customDiff = overviewData[proj].customDiff || {};



        const kpiGrid = document.getElementById('kpiGrid');

        if (!kpiGrid) return;



        const isSb = proj === 'spinbetter';

        const vchColor = isSb ? 'from-amber-500 to-amber-600' : 'from-emerald-500 to-emerald-600';

        const kchBg = isSb ? 'bg-amber-50' : 'bg-emerald-50';

        const kchLabel = isSb ? 'text-amber-600' : 'text-emerald-700';

        const kchText = isSb ? 'text-amber-900' : 'text-emerald-900';



        

        function getDiff(key, colorClass = '') {

            

            

            let val = '';

            let diffValue = null;



            

            const customVal = customDiff[key];

            const customIsValid = customVal && (

                (typeof customVal === 'object' && customVal.value !== undefined && customVal.value !== 0) ||

                (typeof customVal === 'string' && customVal.trim() && customVal !== '0' && customVal !== '0%' && customVal !== '0,0%')

            );



            if (customIsValid) {

                val = typeof customVal === 'string' ? customVal : (customVal.formatted || '');

                diffValue = typeof customVal === 'object' ? customVal.value : null;

            } else if (diff[key]) {

                val = typeof diff[key] === 'string' ? diff[key] : (diff[key].formatted || '');

                diffValue = typeof diff[key] === 'object' ? diff[key].value : null;

            }



            val = String(val || '').trim();

            if (!val || val === '—' || val === '0' || val === '0%' || val === '+0' || val === '-0' || val === '0,0%') return '<span class="text-slate-400 opacity-50">—</span>';



            

            if (!val.includes('+') && !val.includes('-') && diffValue !== null) {

                if (diffValue > 0) {

                    val = '+' + val;

                } else if (diffValue < 0) {

                    val = '-' + val.replace('-', '');

                }

            }



            

            let finalColor = colorClass;

            if (!finalColor) {

                const isPositive = val.includes('+');

                const isNegative = val.includes('-');



                if (['frt', 'art', 'aht', 'mcr'].includes(key)) {

                    

                    finalColor = isNegative ? 'text-emerald-500' : (isPositive ? 'text-rose-500' : 'text-slate-400');

                } else {

                    

                    finalColor = isPositive ? 'text-emerald-500' : (isNegative ? 'text-rose-500' : 'text-slate-400');

                }

            }



            return `<span class="${finalColor}">${val}</span>`;

        }



        // Update grid layout class

        kpiGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8";



        kpiGrid.innerHTML = `

        <!-- ROW 1: VOLUME (VCH, KCH, BRR) -->

        <div class="md:col-span-1 bg-gradient-to-br ${vchColor} rounded-2xl p-5 text-white card-shadow relative overflow-hidden ring-4 ring-white/10">

            <div class="relative z-10">

                <div class="text-[13px] font-black opacity-90 uppercase tracking-widest mb-1">Всего чатов (ВЧ)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-5xl font-black tracking-tighter">${formatNumber(d.vch)}</div>

                    <div class="text-sm font-bold bg-white/20 px-2 py-0.5 rounded-lg border border-white/20">${getDiff('vch', 'text-white')}</div>

                </div>

            </div>

            <div class="absolute right-[-10px] bottom-[-10px] text-7xl opacity-10 rotate-12">💬</div>

        </div>



        <div class="${kchBg} rounded-2xl p-5 border border-amber-100 card-shadow flex flex-col justify-between">

            <div>

                <div class="text-[13px] ${kchLabel} font-black uppercase tracking-widest mb-1">Эскалировано (КЧ)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-4xl font-black ${kchText} tracking-tight">${formatNumber(d.kch)}</div>

                    <div class="text-sm font-bold">${getDiff('kch')}</div>

                </div>

            </div>

        </div>



        <div class="bg-slate-800 rounded-2xl p-5 text-white card-shadow flex flex-col justify-between relative overflow-hidden">

            <div class="relative z-10">

                <div class="text-[13px] text-slate-400 font-black uppercase tracking-widest mb-1">Bot Resolution Rate (BRR)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-4xl font-black tracking-tight">${d.brr}%</div>

                    <div class="text-sm font-bold">${getDiff('brr')}</div>

                </div>

            </div>

            <div class="absolute right-[-5px] bottom-[-5px] text-5xl opacity-5 rotate-12">📉</div>

        </div>



        <!-- ROW 2: QUALITY (CSAT, VOTES, MCR) -->

        <div class="bg-indigo-50 rounded-2xl p-5 border border-indigo-100 card-shadow flex flex-col justify-between">

            <div>

                <div class="text-[13px] text-indigo-500 font-black uppercase tracking-widest mb-1">Удовлетворенность (CSAT)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-4xl font-black text-indigo-900 tracking-tight">${d.csat}%</div>

                    <div class="text-sm font-bold">${getDiff('csat')}</div>

                </div>

            </div>

        </div>



        <div class="bg-indigo-100/50 rounded-2xl p-5 border border-indigo-200 card-shadow flex flex-col justify-between">

            <div>

                <div class="text-[13px] text-indigo-600 font-black uppercase tracking-widest mb-1">Оценок (Votes)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-4xl font-black text-indigo-950 tracking-tight">${d.csatVotes || 0}</div>

                    <div class="text-sm font-bold">${getDiff('csatVotes', 'text-indigo-400')}</div>

                </div>

            </div>

        </div>



        <div class="bg-indigo-900 rounded-2xl p-5 text-white card-shadow flex flex-col justify-between relative overflow-hidden">

            <div class="relative z-10">

                <div class="text-[13px] text-indigo-300 font-black uppercase tracking-widest mb-1">Missed Chats (MCR)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-4xl font-black tracking-tight">${d.mcr}%</div>

                    <div class="text-sm font-bold">${getDiff('mcr')}</div>

                </div>

            </div>

            <div class="absolute right-[-5px] bottom-[-5px] text-5xl opacity-10 rotate-12">⚡</div>

        </div>



        <!-- ROW 3: TIME (FRT, ART, AHT) -->

        <div class="bg-rose-50 rounded-2xl p-5 border border-rose-100 card-shadow flex flex-col justify-between">

            <div>

                <div class="text-[13px] text-rose-500 font-black uppercase tracking-widest mb-1">Первый ответ (FRT)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-3xl font-black text-rose-900 tracking-tight">${formatTime(d.frt)}</div>

                    <div class="text-sm font-bold">${getDiff('frt')}</div>

                </div>

            </div>

        </div>



        <div class="bg-rose-100/50 rounded-2xl p-5 border border-rose-200 card-shadow flex flex-col justify-between">

            <div>

                <div class="text-[13px] text-rose-600 font-black uppercase tracking-widest mb-1">Удержание (ART)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-3xl font-black text-rose-950 tracking-tight">${formatTime(d.art)}</div>

                    <div class="text-sm font-bold">${getDiff('art')}</div>

                </div>

            </div>

        </div>



        <div class="bg-rose-900 rounded-2xl p-5 text-white card-shadow flex flex-col justify-between relative overflow-hidden">

             <div class="relative z-10">

                <div class="text-[13px] text-rose-300 font-black uppercase tracking-widest mb-1">Общее время (AHT)</div>

                <div class="flex items-baseline gap-3">

                    <div class="text-3xl font-black tracking-tight">${formatTime(d.aht)}</div>

                    <div class="text-sm font-bold">${getDiff('aht')}</div>

                </div>

            </div>

            <div class="absolute right-[-5px] bottom-[-5px] text-5xl opacity-10 rotate-12">⏱️</div>

        </div>

    `;

    }





    // ╔═══════════════════════════════════════════════════════════════════════════╗

    // ║                              CHART                                        ║

    // ╚═══════════════════════════════════════════════════════════════════════════╝



    function initChart() {

        const ctx = document.getElementById('mainChart');

        if (!ctx) return;



        mainChart = new Chart(ctx, {

            type: 'line',

            data: { labels: [], datasets: [] },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                interaction: { mode: 'index', intersect: false },

                plugins: {

                    legend: { display: false },

                    tooltip: {

                        backgroundColor: '#1e293b',

                        titleFont: { size: 14, family: 'Inter', weight: '600' },

                        bodyFont: { size: 13, family: 'Inter' },

                        padding: 12,

                        cornerRadius: 8,

                        filter: function (tooltipItem) {

                            // Скрываем контурные линии из tooltip

                            return !tooltipItem.dataset.label || !tooltipItem.dataset.label.includes('(outline)');

                        }

                    }

                },

                scales: {

                    x: {

                        grid: { display: false },

                        ticks: {

                            font: { size: 14, family: 'Inter', weight: '600' }, // Увеличен размер и жирность для недель

                            color: '#1e293b', // Яркий темный цвет для лучшей видимости

                            padding: 8,

                            maxRotation: 45, // Поворот для длинных меток

                            minRotation: 0,

                            autoSkip: true,

                            maxTicksLimit: 10

                        }

                    },

                    y: {

                        type: 'linear',

                        display: true,

                        position: 'left',

                        grid: { color: '#e2e8f0' },

                        ticks: {

                            font: { size: 13, family: 'Inter' },

                            color: '#475569',

                            callback: v => v.toLocaleString()

                        }

                    },

                    y1: {

                        type: 'linear',

                        display: false,

                        position: 'right',

                        min: 0,

                        max: 100,

                        grid: {

                            display: true,

                            color: '#e2e8f0' // Горизонтальные линии сетки для процентов

                        },

                        ticks: {

                            font: { size: 16, family: 'Inter', weight: '600' }, // Увеличен размер шрифта для процентов

                            color: '#1e293b', // Яркий темный цвет

                            padding: 10,

                            callback: v => v + '%'

                        }

                    },

                    y2: {

                        type: 'linear',

                        display: false,

                        position: 'right',

                        grid: { display: false },

                        ticks: {

                            font: { size: 13, family: 'Inter' },

                            color: '#475569',

                            callback: v => formatTime(v)

                        }

                    }

                }

            }

        });



        updateChart();

    }



    function updateChart() {

        if (!mainChart) return;



        const data = chartData[currentProject];

        const datasets = [];



        if (activeMetrics.length === 0) {

            mainChart.data.labels = data.labels;

            mainChart.data.datasets = [];

            mainChart.options.scales.y.display = true;

            mainChart.options.scales.y1.display = false;

            mainChart.options.scales.y2.display = false;

            mainChart.update('active');

            updateLegend();

            return;

        }



        let hasChats = false, hasPercent = false, hasTime = false;



        activeMetrics.forEach((metricKey) => {

            const config = metricConfig[metricKey];



            if (config.yAxis === 'chats') hasChats = true;

            if (config.yAxis === 'percent') hasPercent = true;

            if (config.yAxis === 'time') hasTime = true;



            let yAxisID = 'y';

            if (config.yAxis === 'percent') yAxisID = 'y1';

            if (config.yAxis === 'time') yAxisID = 'y2';



            // Получаем данные для метрики

            let metricData = data.data[metricKey] || [];



            // Для метрик времени убеждаемся, что данные в секундах (числа)

            if (config.yAxis === 'time') {

                metricData = metricData.map(val => {

                    if (typeof val === 'string') {

                        // Если строка типа "10:25" или "00:07", конвертируем в секунды

                        const parts = val.split(':');

                        if (parts.length === 2) {

                            return parseInt(parts[0]) * 60 + parseInt(parts[1]);

                        } else if (parts.length === 3) {

                            return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);

                        }

                    }

                    return typeof val === 'number' ? val : 0;

                });

            }



            // Создаем белый контур для каждой линии для лучшей видимости на фоне

            // Контур рисуется первым (толще и белый)

            datasets.push({

                label: config.label + ' (outline)',

                data: metricData,

                borderColor: '#ffffff', // Белый контур

                backgroundColor: 'transparent',

                borderWidth: 8, // Толстый белый контур

                fill: false,

                tension: 0.3,

                pointRadius: 0, // Без точек на контуре

                pointHoverRadius: 0,

                yAxisID: yAxisID,

                order: 2 // Рисуется первым (под основной линией)

            });



            // Основная цветная линия рисуется поверх белого контура

            datasets.push({

                label: config.label,

                data: metricData,

                borderColor: config.color,

                backgroundColor: activeMetrics.length === 1 ? config.color + '30' : 'transparent',

                borderWidth: 5, // Толстая цветная линия

                fill: activeMetrics.length === 1, // Заливка только для одной метрики

                tension: 0.3,

                pointRadius: 10, // Увеличен размер точки

                pointHoverRadius: 14,

                pointBackgroundColor: config.color,

                pointBorderColor: '#ffffff', // Белая граница для лучшей видимости

                pointBorderWidth: 4, // Увеличена толщина границы точки

                yAxisID: yAxisID,

                order: 1 // Рисуется поверх контура

            });

        });



        mainChart.data.labels = data.labels;

        mainChart.data.datasets = datasets;

        mainChart.options.scales.y.display = hasChats || (!hasPercent && !hasTime);

        mainChart.options.scales.y1.display = hasPercent;

        mainChart.options.scales.y2.display = hasTime;



        // Обновляем настройки осей для лучшей видимости

        // Ось X (недели) - ярче и крупнее

        mainChart.options.scales.x.ticks.font = { size: 14, family: 'Inter', weight: '600' };

        mainChart.options.scales.x.ticks.color = '#1e293b';

        mainChart.options.scales.x.ticks.padding = 8;

        // Поддержка многострочных меток и автоповорота для длинных меток

        mainChart.options.scales.x.ticks.maxRotation = 45;

        mainChart.options.scales.x.ticks.minRotation = 0;

        mainChart.options.scales.x.ticks.autoSkip = true;

        mainChart.options.scales.x.ticks.maxTicksLimit = 10;



        // Ось Y1 (проценты) - увеличенный шрифт и включенная сетка

        if (hasPercent) {

            mainChart.options.scales.y1.ticks.font = { size: 16, family: 'Inter', weight: '600' };

            mainChart.options.scales.y1.ticks.color = '#1e293b';

            mainChart.options.scales.y1.ticks.padding = 10;

            mainChart.options.scales.y1.grid.display = true; // Включаем горизонтальные линии сетки

            mainChart.options.scales.y1.grid.color = '#e2e8f0'; // Цвет сетки

        } else {

            mainChart.options.scales.y1.grid.display = false;

        }



        // Ось Y (чаты) - стандартный размер

        mainChart.options.scales.y.ticks.font = { size: 13, family: 'Inter' };

        mainChart.options.scales.y.ticks.color = '#475569';



        // Ось Y2 (время) - стандартный размер

        mainChart.options.scales.y2.ticks.font = { size: 13, family: 'Inter' };

        mainChart.options.scales.y2.ticks.color = '#475569';



        // Если выбраны только метрики времени, перемещаем ось y2 влево и включаем сетку

        if (hasTime && !hasChats && !hasPercent) {

            mainChart.options.scales.y2.position = 'left';

            mainChart.options.scales.y2.grid.display = true;

            mainChart.options.scales.y2.grid.color = '#e2e8f0';

        } else {

            mainChart.options.scales.y2.position = 'right';

            mainChart.options.scales.y2.grid.display = false;

        }



        mainChart.update('active');

        updateLegend();

    }



    function updateLegend() {

        const legendContainer = document.getElementById('chartLegend');

        if (!legendContainer) return;



        if (activeMetrics.length === 0) {

            legendContainer.innerHTML = '<div class="text-slate-500 text-sm">Выберите метрики для отображения</div>';

            return;

        }



        let html = '';

        activeMetrics.forEach(metricKey => {

            const config = metricConfig[metricKey];

            const data = chartData[currentProject].data[metricKey];

            const lastValue = data[data.length - 1];

            const prevValue = data[data.length - 2];

            const diff = lastValue - prevValue;



            let displayValue = lastValue;

            let displayDiff = diff;



            if (config.yAxis === 'time') {

                displayValue = formatTime(lastValue);

                displayDiff = (diff >= 0 ? '+' : '') + formatTime(Math.abs(diff));

            } else if (config.unit === '%') {

                displayValue = lastValue + '%';

                displayDiff = (diff >= 0 ? '+' : '') + diff.toFixed(1) + '%';

            } else {

                displayValue = lastValue.toLocaleString();

                displayDiff = (diff >= 0 ? '+' : '') + diff.toLocaleString();

            }



            html += `

        <div class="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">

                <div class="w-4 h-4 rounded-full" style="background-color: ${config.color}"></div>

                <div>

                    <div class="font-semibold text-gray-800">${config.icon} ${config.label}</div>

                    <div class="text-sm">

                        <span class="font-bold">${displayValue}</span>

                        <span class="text-slate-500 ml-1">(${displayDiff})</span>

                    </div>

                </div>

            </div>

        `;

        });



        legendContainer.innerHTML = html;

    }



    function toggleMetric(metric) {

        const index = activeMetrics.indexOf(metric);

        if (index > -1) {

            activeMetrics.splice(index, 1);

        } else {

            if (activeMetrics.length >= 3) activeMetrics.shift();

            activeMetrics.push(metric);

        }

        updateMetricButtons();

        updateChart();

    }



    function resetMetrics() {

        activeMetrics = [];

        updateMetricButtons();

        updateChart();

    }



    function selectAllMetrics() {

        activeMetrics = ['vch', 'kch', 'brr'];

        updateMetricButtons();

        updateChart();

    }



    function updateMetricButtons() {

        allMetrics.forEach(metric => {

            const btn = document.getElementById('metric-btn-' + metric);

            if (btn) {

                if (activeMetrics.includes(metric)) {

                    btn.classList.add('metric-btn-active');

                    btn.classList.remove('metric-btn-inactive');

                    // Применяем цвет метрики с прозрачностью

                    const config = metricConfig[metric];

                    if (config && config.color) {

                        // Преобразуем hex цвет в rgba с прозрачностью

                        const hexToRgba = (hex, alpha) => {

                            // Поддержка коротких и длинных hex кодов

                            const fullHex = hex.length === 4

                                ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`

                                : hex;

                            const r = parseInt(fullHex.slice(1, 3), 16);

                            const g = parseInt(fullHex.slice(3, 5), 16);

                            const b = parseInt(fullHex.slice(5, 7), 16);

                            return `rgba(${r}, ${g}, ${b}, ${alpha})`;

                        };

                        // Фон с прозрачностью, граница с полной непрозрачностью

                        btn.style.background = `linear-gradient(135deg, ${hexToRgba(config.color, 0.85)} 0%, ${hexToRgba(config.color, 0.75)} 100%)`;

                        btn.style.borderColor = config.color;

                        btn.style.borderWidth = '2px';

                        btn.style.borderStyle = 'solid';

                        btn.style.color = '#ffffff';

                        btn.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';

                    }

                } else {

                    btn.classList.remove('metric-btn-active');

                    btn.classList.add('metric-btn-inactive');

                    // Сбрасываем стили для неактивных кнопок

                    btn.style.background = '';

                    btn.style.borderColor = '';

                    btn.style.borderWidth = '';

                    btn.style.borderStyle = '';

                    btn.style.color = '';

                    btn.style.textShadow = '';

                }

            }

        });

    }





    // ╔═══════════════════════════════════════════════════════════════════════════╗

    // ║                              PLANS                                        ║

    // ╚═══════════════════════════════════════════════════════════════════════════╝



    /**

     * Фильтрация планов по дням

     */

    /**

     * Фильтрация планов по дням

     */

    function showPlanDay(day) {

        const days = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'perspective'];

        days.forEach(d => {

            const btn = document.getElementById('plan-day-' + d);

            if (!btn) return;



            if (d === day) {

                btn.classList.add('day-btn-active');

                btn.classList.remove('day-btn-inactive');

            } else {

                btn.classList.remove('day-btn-active');

                btn.classList.add('day-btn-inactive');

            }

        });



        // 1. Скрываем/показываем карточки

        const allItems = document.querySelectorAll('.plan-item-card');

        allItems.forEach(el => {

            const itemDay = el.getAttribute('data-day');



            // Логика видимости карточки

            if (day === 'all' || itemDay === day) {

                el.classList.remove('hidden');

            } else {

                el.classList.add('hidden');

            }

        });



        // 2. Скрываем/показываем секции, если в них нет видимых карточек

        const sections = [

            'priorities-section',

            'blocks-only-section',

            'spinbetter-section',

            'coldbet-section',

            'other-tasks-section'

        ];



        sections.forEach(sectionId => {

            const section = document.getElementById(sectionId);

            if (!section) return;



            // Ищем видимые карточки внутри секции

            const visibleCards = section.querySelectorAll('.plan-item-card:not(.hidden)');



            if (visibleCards.length > 0) {

                section.classList.remove('hidden');

            } else {

                section.classList.add('hidden');

            }

        });

    }



    /**

     * Свернуть/развернуть секцию

     */

    function toggleSection(sectionId) {

        const content = document.getElementById(sectionId + '-content');

        const icon = document.getElementById(sectionId + '-icon');



        if (!content) return;



        if (content.classList.contains('hidden')) {

            content.classList.remove('hidden');

            if (icon) icon.style.transform = 'rotate(0deg)';

        } else {

            content.classList.add('hidden');

            if (icon) icon.style.transform = 'rotate(-90deg)';

        }

    }





    // ╔═══════════════════════════════════════════════════════════════════════════╗

    // ║                              WORKLOAD                            ║

    // ╚═══════════════════════════════════════════════════════════════════════════╝



    function toggleWorkloadDetails() {

        const details = document.getElementById('workload-details');

        const chevron = document.getElementById('workload-chevron');

        const text = document.getElementById('workload-toggle-text');



        if (details.classList.contains('hidden')) {

            details.classList.remove('hidden');

            chevron.style.transform = 'rotate(180deg)';

            text.textContent = 'Скрыть детали';

        } else {

            details.classList.add('hidden');

            chevron.style.transform = 'rotate(0deg)';

            text.textContent = 'Показать детали';

        }

    }





    // ╔═══════════════════════════════════════════════════════════════════════════╗

    // ║                           INITIALIZATION                                  ║

    // ╚═══════════════════════════════════════════════════════════════════════════╝



    document.addEventListener('DOMContentLoaded', function () {

        // Initialize KPI Grid

        selectOverviewProject('spinbetter');



        // Initialize Chart

        initChart();



        // Update metric buttons to apply colors

        updateMetricButtons();

    });

</script>
    

</body>

</html>



